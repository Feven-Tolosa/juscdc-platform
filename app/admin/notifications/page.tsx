import { createClient } from '@/lib/supabase/server'
import NotificationsManager from '@/components/admin/NotificationsManager'

export default async function AdminNotificationsPage() {
  const supabase = await createClient()

  const [{ data: notifications }, { data: members }] = await Promise.all([
    supabase
      .from('notifications')
      .select('*, profiles(full_name)')
      .order('created_at', { ascending: false })
      .limit(50),
    supabase
      .from('members')
      .select('id, full_name, student_id')
      .order('full_name'),
  ])

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl font-extrabold text-white'>Notifications</h1>
        <p className='mt-2 text-slate-400'>
          Send announcements to all members or specific individuals.
        </p>
      </div>

      <NotificationsManager
        notifications={notifications ?? []}
        members={members ?? []}
      />
    </div>
  )
}
