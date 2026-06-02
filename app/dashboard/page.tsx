import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

import DashboardSidebar from '@/components/dashboard/DashboardSidebar'
import DashboardHeader from '@/components/dashboard/DashboardHeader'
import ProfileCard from '@/components/dashboard/ProfileCard'
import DigitalIDCard from '@/components/dashboard/DigitalIDCard'
import RegisteredPrograms from '@/components/dashboard/RegisteredPrograms'
import CertificateVault from '@/components/dashboard/CertificateVault'
import NotificationsPanel from '@/components/dashboard/NotificationsPanel'

export default async function DashboardPage() {
  const supabase = await createClient()

  // Auth guard
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  // Profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (!profile) redirect('/login')

  // Registered programs (join programs table)
  const { data: registrations } = await supabase
    .from('registrations')
    .select(
      `
      id,
      registered_at,
      programs (
        id,
        title,
        start_date,
        status
      )
    `,
    )
    .eq('user_id', user.id)
    .order('registered_at', { ascending: false })

  //  Certificates
  const { data: certificates } = await supabase
    .from('certificates')
    .select('*')
    .eq('user_id', user.id)
    .order('issue_date', { ascending: false })

  // Build signed URLs for each certificate file
  const certificatesWithUrls = await Promise.all(
    (certificates ?? []).map(async (cert) => {
      if (!cert.file_path) return { ...cert, fileUrl: null }
      const { data: signed } = await supabase.storage
        .from('certificates')
        .createSignedUrl(cert.file_path, 60 * 60) // 1-hour expiry
      return { ...cert, fileUrl: signed?.signedUrl ?? null }
    }),
  )

  //  Notifications (personal + broadcasts)
  const { data: notifications } = await supabase
    .from('notifications')
    .select('*')
    .or(`user_id.eq.${user.id},user_id.is.null`)
    .order('created_at', { ascending: false })
    .limit(20)

  //  Unread count for header bell
  const unreadCount = (notifications ?? []).filter((n) => !n.is_read).length

  //  Shape data for components
  const dashboardUser = {
    id: user.id,
    fullName: profile.full_name,
    studentId: profile.student_id,
    email: profile.email,
    campus: profile.campus,
    department: profile.department,
    image: profile.avatar_url || '/users/default-avatar.jpg',
  }

  const mappedPrograms = (registrations ?? []).map((reg) => {
    const program = Array.isArray(reg.programs) ? reg.programs[0] : reg.programs
    return {
      id: reg.id,
      title: program?.title ?? 'Unknown Program',
      date: program?.start_date
        ? new Date(program.start_date).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })
        : '—',
      status: (program?.status ?? 'Upcoming') as
        | 'Completed'
        | 'Ongoing'
        | 'Upcoming',
    }
  })

  const mappedCertificates = certificatesWithUrls.map((cert) => ({
    id: cert.id,
    title: cert.title,
    issueDate: new Date(cert.issue_date).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    }),
    fileUrl: cert.fileUrl,
  }))

  const mappedNotifications = (notifications ?? []).map((n) => ({
    id: n.id,
    title: n.title,
    message: n.message,
    isRead: n.is_read,
    createdAt: formatRelativeTime(n.created_at),
  }))

  return (
    <main className='flex min-h-screen bg-[#f8fafc] pt-24'>
      <DashboardSidebar />

      <div className='flex-1'>
        <DashboardHeader unreadCount={unreadCount} />

        <div className='space-y-10 p-6 lg:p-10'>
          {/* Top row */}
          <div className='grid gap-10 xl:grid-cols-3'>
            <ProfileCard user={dashboardUser} />
            <div className='xl:col-span-2'>
              <DigitalIDCard user={dashboardUser} />
            </div>
          </div>

          {/* Sections */}
          <section id='programs'>
            <RegisteredPrograms programs={mappedPrograms} />
          </section>

          <section id='certificates'>
            <CertificateVault certificates={mappedCertificates} />
          </section>

          <section id='notifications'>
            <NotificationsPanel notifications={mappedNotifications} />
          </section>
        </div>
      </div>
    </main>
  )
}

//  Helper
function formatRelativeTime(isoString: string): string {
  const diff = Date.now() - new Date(isoString).getTime()
  const minutes = Math.floor(diff / 60_000)
  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`
  return new Date(isoString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}
