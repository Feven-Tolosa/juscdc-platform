import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

import DashboardSidebar from '@/components/dashboard/DashboardSidebar'
import DashboardHeader from '@/components/dashboard/DashboardHeader'

import ProfileCard from '@/components/dashboard/ProfileCard'
import DigitalIDCard from '@/components/dashboard/DigitalIDCard'

import RegisteredPrograms from '@/components/dashboard/RegisteredPrograms'

import CertificateVault from '@/components/dashboard/CertificateVault'

import NotificationsPanel from '@/components/dashboard/NotificationsPanel'

import {
  programs,
  certificates,
  notifications,
} from '@/components/dashboard/data'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (!profile) {
    redirect('/login')
  }

  const dashboardUser = {
    fullName: profile.full_name,
    studentId: profile.student_id,
    email: profile.email,
    campus: profile.campus,
    department: profile.department,
    image: profile.avatar_url || '/users/default-avatar.jpg',
  }

  return (
    <main className='flex min-h-screen bg-[#f8fafc] pt-24'>
      <DashboardSidebar />

      <div className='flex-1'>
        <DashboardHeader />

        <div className='space-y-10 p-6 lg:p-10'>
          {/* Top */}
          <div className='grid gap-10 xl:grid-cols-3'>
            <ProfileCard user={dashboardUser} />

            <div className='xl:col-span-2'>
              <DigitalIDCard user={dashboardUser} />
            </div>
          </div>

          {/* Programs */}
          <RegisteredPrograms programs={programs} />

          {/* Certificates */}
          <CertificateVault certificates={certificates} />

          {/* Notifications */}
          <NotificationsPanel notifications={notifications} />
        </div>
      </div>
    </main>
  )
}
