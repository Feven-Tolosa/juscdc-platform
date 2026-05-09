'use client'

import {
  LayoutDashboard,
  User,
  GraduationCap,
  Bell,
  FileBadge,
} from 'lucide-react'

const links = [
  {
    label: 'Overview',
    icon: LayoutDashboard,
  },
  {
    label: 'Profile',
    icon: User,
  },
  {
    label: 'Programs',
    icon: GraduationCap,
  },
  {
    label: 'Certificates',
    icon: FileBadge,
  },
  {
    label: 'Notifications',
    icon: Bell,
  },
]

export default function DashboardSidebar() {
  return (
    <aside className=' hidden w-[280px] border-r border-slate-200 bg-white lg:block'>
      <div className='flex h-24 items-center border-b border-slate-200 px-8'>
        <h2 className='text-2xl font-extrabold text-[#1e3a8a]'>JUSCDC</h2>
      </div>

      <div className='space-y-3 p-6'>
        {links.map((link) => {
          const Icon = link.icon

          return (
            <button
              key={link.label}
              className='flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left font-medium text-slate-700 transition hover:bg-slate-100'
            >
              <Icon className='h-5 w-5' />

              {link.label}
            </button>
          )
        })}
      </div>
    </aside>
  )
}
