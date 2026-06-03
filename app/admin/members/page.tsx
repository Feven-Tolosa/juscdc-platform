import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Users, CheckCircle, XCircle } from 'lucide-react'

const CAMPUS_COLORS: Record<string, string> = {
  'Main Campus': 'bg-blue-100 text-blue-700',
  BECO: 'bg-purple-100 text-purple-700',
  JiT: 'bg-green-100 text-green-700',
  AGRI: 'bg-orange-100 text-orange-700',
}

export default async function AdminMembersPage() {
  const supabase = await createClient()

  // ── Auth guard ──────────────────────────────────────────────
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  // ── Admin guard ─────────────────────────────────────────────
  const { data: isAdmin } = await supabase.rpc('is_admin')
  if (!isAdmin) redirect('/dashboard')

  // ── Fetch all members ────────────────────────────────────────
  const { data: members, error } = await supabase
    .from('members')
    .select('*')
    .order('joined_at', { ascending: false })

  if (error) {
    console.error('Failed to load members:', error)
  }

  // ── Stats ────────────────────────────────────────────────────
  const total = members?.length ?? 0
  const active = members?.filter((m) => m.is_active).length ?? 0
  const byCampus = (members ?? []).reduce<Record<string, number>>((acc, m) => {
    acc[m.campus] = (acc[m.campus] ?? 0) + 1
    return acc
  }, {})

  return (
    <main className='min-h-screen bg-[#f8fafc] p-6 lg:p-10'>
      {/* Header */}
      <div className='mb-10'>
        <h1 className='text-4xl font-extrabold text-slate-900'>
          Member Registry
        </h1>
        <p className='mt-2 text-slate-500'>
          All registered JUSCDC members across campuses.
        </p>
      </div>

      {/* Stats row */}
      <div className='mb-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
        <StatCard
          label='Total Members'
          value={total}
          icon={<Users className='h-6 w-6' />}
        />
        <StatCard
          label='Active Members'
          value={active}
          icon={<CheckCircle className='h-6 w-6 text-green-500' />}
        />
        {Object.entries(byCampus).map(([campus, count]) => (
          <StatCard key={campus} label={campus} value={count} />
        ))}
      </div>

      {/* Table */}
      <div className='overflow-hidden rounded-[28px] bg-white shadow-xl'>
        <div className='overflow-x-auto'>
          <table className='w-full text-left text-sm'>
            <thead>
              <tr className='border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500'>
                <th className='px-6 py-4'>Name</th>
                <th className='px-6 py-4'>Student ID</th>
                <th className='px-6 py-4'>Email</th>
                <th className='px-6 py-4'>Campus</th>
                <th className='px-6 py-4'>Department</th>
                <th className='px-6 py-4'>Joined</th>
                <th className='px-6 py-4'>Status</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-100'>
              {(members ?? []).length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className='px-6 py-16 text-center text-slate-400'
                  >
                    No members registered yet.
                  </td>
                </tr>
              ) : (
                (members ?? []).map((member) => (
                  <tr key={member.id} className='transition hover:bg-slate-50'>
                    <td className='px-6 py-4 font-semibold text-slate-900'>
                      {member.full_name}
                    </td>
                    <td className='px-6 py-4 font-mono text-slate-600'>
                      {member.student_id}
                    </td>
                    <td className='px-6 py-4 text-slate-600'>{member.email}</td>
                    <td className='px-6 py-4'>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          CAMPUS_COLORS[member.campus] ??
                          'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {member.campus}
                      </span>
                    </td>
                    <td className='px-6 py-4 text-slate-600'>
                      {member.department}
                    </td>
                    <td className='px-6 py-4 text-slate-500'>
                      {new Date(member.joined_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </td>
                    <td className='px-6 py-4'>
                      {member.is_active ? (
                        <span className='flex items-center gap-1.5 text-green-600'>
                          <CheckCircle className='h-4 w-4' /> Active
                        </span>
                      ) : (
                        <span className='flex items-center gap-1.5 text-slate-400'>
                          <XCircle className='h-4 w-4' /> Inactive
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer count */}
        {total > 0 && (
          <div className='border-t border-slate-200 px-6 py-4 text-sm text-slate-500'>
            Showing {total} member{total !== 1 ? 's' : ''}
          </div>
        )}
      </div>
    </main>
  )
}

function StatCard({
  label,
  value,
  icon,
}: {
  label: string
  value: number
  icon?: React.ReactNode
}) {
  return (
    <div className='rounded-[20px] bg-white p-6 shadow-md'>
      <div className='flex items-center justify-between'>
        <p className='text-sm font-medium text-slate-500'>{label}</p>
        {icon}
      </div>
      <p className='mt-3 text-4xl font-extrabold text-slate-900'>{value}</p>
    </div>
  )
}
