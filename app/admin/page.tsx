import { createClient } from '@/lib/supabase/server'
import { Users, GraduationCap, FileBadge, Bell, TrendingUp } from 'lucide-react'

const CAMPUS_COLORS: Record<string, string> = {
  'Main Campus': 'bg-blue-500',
  BECO: 'bg-purple-500',
  JiT: 'bg-green-500',
  AGRI: 'bg-orange-500',
}

export default async function AdminOverviewPage() {
  const supabase = await createClient()

  const [
    { count: totalMembers },
    { count: totalPrograms },
    { count: totalCertificates },
    { count: unreadNotifications },
    { data: members },
    { data: recentMembers },
  ] = await Promise.all([
    supabase.from('members').select('*', { count: 'exact', head: true }),
    supabase.from('programs').select('*', { count: 'exact', head: true }),
    supabase.from('certificates').select('*', { count: 'exact', head: true }),
    supabase
      .from('notifications')
      .select('*', { count: 'exact', head: true })
      .eq('is_read', false),
    supabase.from('members').select('campus'),
    supabase
      .from('members')
      .select('full_name, campus, department, joined_at')
      .order('joined_at', { ascending: false })
      .limit(5),
  ])

  // Campus breakdown
  const byCampus = (members ?? []).reduce<Record<string, number>>((acc, m) => {
    acc[m.campus] = (acc[m.campus] ?? 0) + 1
    return acc
  }, {})

  const stats = [
    {
      label: 'Total Members',
      value: totalMembers ?? 0,
      icon: Users,
      color: 'text-blue-400',
    },
    {
      label: 'Programs',
      value: totalPrograms ?? 0,
      icon: GraduationCap,
      color: 'text-green-400',
    },
    {
      label: 'Certificates',
      value: totalCertificates ?? 0,
      icon: FileBadge,
      color: 'text-yellow-400',
    },
    {
      label: 'Unread Alerts',
      value: unreadNotifications ?? 0,
      icon: Bell,
      color: 'text-red-400',
    },
  ]

  return (
    <div className='space-y-10'>
      <div>
        <h1 className='text-4xl font-extrabold text-white'>Overview</h1>
        <p className='mt-2 text-slate-400'>JUSCDC at a glance.</p>
      </div>

      {/* Stat cards */}
      <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-4'>
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div
            key={label}
            className='rounded-2xl bg-slate-900 p-6 ring-1 ring-slate-800'
          >
            <div className='flex items-center justify-between'>
              <p className='text-sm font-medium text-slate-400'>{label}</p>
              <Icon className={`h-5 w-5 ${color}`} />
            </div>
            <p className='mt-4 text-4xl font-extrabold text-white'>{value}</p>
          </div>
        ))}
      </div>

      <div className='grid gap-8 xl:grid-cols-2'>
        {/* Campus breakdown */}
        <div className='rounded-2xl bg-slate-900 p-6 ring-1 ring-slate-800'>
          <div className='mb-6 flex items-center gap-2'>
            <TrendingUp className='h-5 w-5 text-yellow-400' />
            <h2 className='font-bold text-white'>Members by Campus</h2>
          </div>
          <div className='space-y-4'>
            {Object.entries(byCampus).length === 0 ? (
              <p className='text-sm text-slate-500'>No members yet.</p>
            ) : (
              Object.entries(byCampus).map(([campus, count]) => {
                const pct = totalMembers
                  ? Math.round((count / totalMembers) * 100)
                  : 0
                return (
                  <div key={campus}>
                    <div className='mb-1 flex justify-between text-sm'>
                      <span className='font-medium text-slate-300'>
                        {campus}
                      </span>
                      <span className='text-slate-500'>
                        {count} ({pct}%)
                      </span>
                    </div>
                    <div className='h-2 overflow-hidden rounded-full bg-slate-800'>
                      <div
                        className={`h-full rounded-full ${CAMPUS_COLORS[campus] ?? 'bg-slate-500'}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>

        {/* Recent signups */}
        <div className='rounded-2xl bg-slate-900 p-6 ring-1 ring-slate-800'>
          <div className='mb-6 flex items-center gap-2'>
            <Users className='h-5 w-5 text-yellow-400' />
            <h2 className='font-bold text-white'>Recent Signups</h2>
          </div>
          <div className='space-y-4'>
            {(recentMembers ?? []).length === 0 ? (
              <p className='text-sm text-slate-500'>No members yet.</p>
            ) : (
              (recentMembers ?? []).map((m, i) => (
                <div key={i} className='flex items-center justify-between'>
                  <div>
                    <p className='text-sm font-semibold text-white'>
                      {m.full_name}
                    </p>
                    <p className='text-xs text-slate-500'>
                      {m.department} · {m.campus}
                    </p>
                  </div>
                  <span className='text-xs text-slate-500'>
                    {new Date(m.joined_at).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
