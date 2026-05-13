'use client'

import { useState } from 'react'
import { signup } from '@/actions/auth'

export default function SignupPage() {
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSignup(formData: FormData) {
    if (loading) return

    setLoading(true)
    setErrorMessage('')

    try {
      await signup(formData)
    } catch (error) {
      console.error(error)

      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className='flex min-h-screen items-center justify-center bg-[#f8fafc] px-6 py-32'>
      <div className='w-full max-w-xl rounded-[40px] bg-white p-10 shadow-2xl'>
        <h1 className='text-4xl font-extrabold text-slate-900'>
          Create Account
        </h1>

        <p className='mt-3 text-slate-500'>
          Join the JUSCDC membership platform.
        </p>

        <form action={handleSignup} className='mt-10 space-y-5'>
          <input
            name='fullName'
            required
            placeholder='Full Name'
            className='w-full rounded-2xl border border-slate-300 px-5 py-4 text-slate-500 outline-none focus:border-[#1e3a8a] focus:text-slate-800'
          />

          <input
            name='studentId'
            required
            placeholder='Student ID'
            className='w-full rounded-2xl border border-slate-300 px-5 py-4 text-slate-500 outline-none focus:border-[#1e3a8a] focus:text-slate-800'
          />

          <input
            name='campus'
            required
            placeholder='Campus'
            className='w-full rounded-2xl border border-slate-300 px-5 py-4 text-slate-500 outline-none focus:border-[#1e3a8a] focus:text-slate-800'
          />

          <input
            name='department'
            required
            placeholder='Department'
            className='w-full rounded-2xl border border-slate-300 px-5 py-4 text-slate-500 outline-none focus:border-[#1e3a8a] focus:text-slate-800'
          />

          <input
            name='email'
            type='email'
            required
            placeholder='Email'
            className='w-full rounded-2xl border border-slate-300 px-5 py-4 text-slate-500 outline-none focus:border-[#1e3a8a] focus:text-slate-800'
          />

          <input
            name='password'
            type='password'
            required
            placeholder='Password'
            className='w-full rounded-2xl border border-slate-300 px-5 py-4 text-slate-500 outline-none focus:border-[#1e3a8a] focus:text-slate-800'
          />

          {errorMessage && (
            <p className='rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600'>
              {errorMessage}
            </p>
          )}

          <button
            type='submit'
            disabled={loading}
            className='w-full rounded-2xl bg-[#1e3a8a] px-5 py-4 font-semibold text-white transition hover:bg-[#172554] disabled:cursor-not-allowed disabled:opacity-50'
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
      </div>
    </main>
  )
}
