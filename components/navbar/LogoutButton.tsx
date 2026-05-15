'use client'

import { useTransition } from 'react'

import { useRouter } from 'next/navigation'

import { LogOut } from 'lucide-react'

import { createClient } from '@/lib/supabase/client'

export default function LogoutButton() {
  const router = useRouter()

  const [isPending, startTransition] = useTransition()

  async function handleLogout() {
    const supabase = createClient()

    await supabase.auth.signOut()

    startTransition(() => {
      router.refresh()

      router.push('/login')
    })
  }

  return (
    <button
      onClick={handleLogout}
      disabled={isPending}
      className='flex w-full items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10 disabled:opacity-50'
    >
      <LogOut className='h-4 w-4' />

      {isPending ? 'Logging out...' : 'Logout'}
    </button>
  )
}
