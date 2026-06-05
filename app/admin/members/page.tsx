import { createClient } from '@/lib/supabase/server'
import MembersTable from '@/components/admin/MembersTable'

export default async function AdminMembersPage() {
  const supabase = await createClient()

  const { data: members } = await supabase
    .from('members')
    .select('*')
    .order('joined_at', { ascending: false })

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl font-extrabold text-white'>Members</h1>
        <p className='mt-2 text-slate-400'>
          {members?.length ?? 0} registered member
          {(members?.length ?? 0) !== 1 ? 's' : ''}
        </p>
      </div>

      <MembersTable members={members ?? []} />
    </div>
  )
}
