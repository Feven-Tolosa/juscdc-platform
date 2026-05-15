'use client'

import { LogOut } from 'lucide-react'

import { logout } from '@/actions/auth'

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button
        type='submit'
        className='flex w-full items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10'
      >
        <LogOut className='h-4 w-4' />
        Logout
      </button>
    </form>
  )
}
