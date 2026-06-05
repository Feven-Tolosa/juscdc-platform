'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase/supabaseClient'
import { Eye, EyeOff } from 'lucide-react'

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)

    const { error } = await supabase.auth.updateUser({
      password,
    })

    setLoading(false)

    if (error) {
      alert(error.message)
      return
    }

    alert('Password updated successfully')
    router.push('/login')
  }

  return (
    <main className='flex min-h-screen items-center justify-center bg-[#f8fafc] px-6'>
      <div className='w-full max-w-md rounded-[40px] bg-white text-slate-800 p-10 shadow-2xl'>
        <h1 className='mb-6 text-3xl font-bold '>Reset Password</h1>

        <form onSubmit={handleUpdate} className='space-y-4'>
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='New Password'
              className='w-full rounded-2xl border border-slate-300 px-5 py-4 text-slate-700 outline-none transition focus:border-[#1e3a8a]'
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700'
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
            type='submit'
            disabled={loading}
            className='w-full rounded-2xl bg-[#1e3a8a] py-4 text-white'
          >
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      </div>
    </main>
  )
}
