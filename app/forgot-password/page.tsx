'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase/supabaseClient'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })

    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Password reset email sent. Check your inbox.')
    }

    setLoading(false)
  }

  return (
    <main className='flex min-h-screen items-center justify-center bg-[#f8fafc] px-6'>
      <div className='w-full max-w-md rounded-[40px] bg-white text-slate-800 p-10 shadow-2xl'>
        <h1 className='mb-2 text-3xl font-bold'>Forgot Password</h1>

        <p className='mb-6 text-slate-500'>
          Enter your email to receive a reset link.
        </p>

        <form onSubmit={handleReset} className='space-y-4'>
          <input
            type='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className='w-full rounded-2xl border border-slate-300 px-5 py-4 text-slate-700 outline-none transition focus:border-[#1e3a8a]'
          />

          <button
            type='submit'
            disabled={loading}
            className='w-full rounded-2xl bg-[#1e3a8a] py-4 text-white'
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        {message && (
          <p className='mt-4 text-center text-sm text-slate-600'>{message}</p>
        )}
      </div>
    </main>
  )
}
