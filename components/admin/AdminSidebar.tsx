'use client'

import {
  LayoutDashboard,
  Users,
  GraduationCap,
  FileBadge,
  Bell,
  LogOut,
  ShieldCheck,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

const links = [
  { label: 'Overview', href: '/admin', icon: LayoutDashboard },
  { label: 'Members', href: '/admin/members', icon: Users },
  { label: 'Programs', href: '/admin/programs', icon: GraduationCap },
  { label: 'Certificates', href: '/admin/certificates', icon: FileBadge },
  { label: 'Notifications', href: '/admin/notifications', icon: Bell },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <aside className='hidden w-65 flex-col bg-[#0a0f1e] lg:flex'>
      {/* Logo */}
      <div className='flex h-20 items-center gap-3 border-b border-slate-800 px-7'>
        <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400'>
          <ShieldCheck className='h-5 w-5 text-[#0a0f1e]' />
        </div>
        <div>
          <p className='text-sm font-extrabold text-white'>JUSCDC</p>
          <p className='text-xs text-slate-500'>Admin Portal</p>
        </div>
      </div>

      {/* Nav */}
      <nav className='flex-1 space-y-1 p-4'>
        {links.map(({ label, href, icon: Icon }) => {
          const active =
            href === '/admin'
              ? pathname === '/admin'
              : pathname.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                active
                  ? 'bg-yellow-400 text-[#0a0f1e]'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon className='h-4 w-4' />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Sign out */}
      <div className='border-t border-slate-800 p-4'>
        <button
          onClick={handleSignOut}
          className='flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-red-950 hover:text-red-400'
        >
          <LogOut className='h-4 w-4' />
          Sign Out
        </button>
      </div>
    </aside>
  )
}
