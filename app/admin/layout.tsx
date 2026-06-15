import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AdminSidebar from '@/components/admin/AdminSidebar'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()

  // Auth guard
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  // Admin guard
  const { data: adminRow } = await supabase
    .from('admins')
    .select('id')
    .eq('id', user.id)
    .maybeSingle()

  // if (!adminRow) redirect('/admin/login')

  return (
    <div className='flex min-h-screen bg-[#0d1424] mt-25'>
      <AdminSidebar />
      <div className='flex flex-1 flex-col'>
        {/* Top bar */}
        <header className='flex h-20 items-center border-b border-slate-800 bg-[#0a0f1e] px-8'>
          <p className='text-sm text-slate-400'>
            Logged in as{' '}
            <span className='font-semibold text-white'>{user.email}</span>
          </p>
        </header>

        {/* Page content */}
        <main className='flex-1 p-6 lg:p-10'>{children}</main>
      </div>
    </div>
  )
}
