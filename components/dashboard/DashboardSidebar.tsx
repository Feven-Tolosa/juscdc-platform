'use client'

import {
  LayoutDashboard,
  User,
  GraduationCap,
  Bell,
  FileBadge,
  LogOut,
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

const links = [
  { label: 'Overview', icon: LayoutDashboard, section: 'top' },
  { label: 'Profile', icon: User, section: 'profile' },
  { label: 'Programs', icon: GraduationCap, section: 'programs' },
  { label: 'Certificates', icon: FileBadge, section: 'certificates' },
  { label: 'Notifications', icon: Bell, section: 'notifications' },
]

export default function DashboardSidebar() {
  const router = useRouter()

  const scrollTo = (section: string) => {
    if (section === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <aside className='hidden w-280px flex-col border-r border-slate-200 bg-white lg:flex'>
      {/* Logo */}
      <div className='flex h-24 items-center border-b border-slate-200 px-8'>
        <h2 className='text-2xl font-extrabold text-[#112662]'>JUSCDC</h2>
      </div>

      {/* Nav links */}
      <nav className='flex-1 space-y-3 p-6'>
        {links.map((link) => {
          const Icon = link.icon
          return (
            <button
              key={link.label}
              onClick={() => scrollTo(link.section)}
              className='flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[#112662]'
            >
              <Icon className='h-5 w-5' />
              {link.label}
            </button>
          )
        })}
      </nav>

      {/* Sign out */}
      <div className='border-t border-slate-200 p-6'>
        <button
          onClick={handleSignOut}
          className='flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left font-medium text-red-500 transition hover:bg-red-50'
        >
          <LogOut className='h-5 w-5' />
          Sign Out
        </button>
      </div>
    </aside>
  )
}
