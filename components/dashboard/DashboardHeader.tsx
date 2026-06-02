'use client'

import { Bell } from 'lucide-react'

interface DashboardHeaderProps {
  unreadCount?: number
}

export default function DashboardHeader({
  unreadCount = 0,
}: DashboardHeaderProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className='flex h-24 items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-10'>
      <div>
        <h1 className='text-3xl font-extrabold text-slate-900'>
          Membership Dashboard
        </h1>
        <p className='mt-1 text-slate-500'>Welcome back to JUSCDC</p>
      </div>

      <button
        onClick={() => scrollTo('notifications')}
        className='relative rounded-2xl bg-slate-100 p-4 transition hover:bg-slate-200'
        aria-label={`${unreadCount} unread notifications`}
      >
        <Bell className='h-6 w-6 text-slate-700' />
        {unreadCount > 0 && (
          <span className='absolute right-2.5 top-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white'>
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>
    </header>
  )
}
