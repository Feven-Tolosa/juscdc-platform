'use client'

import Link from 'next/link'

import { useActionState } from 'react'

import { login } from '@/actions/auth'

import LoginButton from '@/components/auth/LoginButton'

export default function LoginPage() {
  const [state, formAction] = useActionState(login, {
    error: null,
  })

  return (
    <main className='flex min-h-screen items-center justify-center bg-[#f8fafc] px-6 py-32'>
      <div className='w-full max-w-md rounded-[40px] bg-white p-10 shadow-2xl'>
        <div className='mb-8'>
          <h1 className='text-4xl font-extrabold text-slate-900'>
            Welcome Back
          </h1>

          <p className='mt-3 text-slate-500'>
            Login to your membership dashboard.
          </p>
        </div>

        <form action={formAction} className='space-y-5'>
          {/* Email */}
          <div>
            <input
              name='email'
              type='email'
              required
              placeholder='Email'
              className='w-full rounded-2xl border border-slate-300 px-5 py-4 text-slate-700 outline-none transition focus:border-[#1e3a8a]'
            />
          </div>

          {/* Password */}
          <div>
            <input
              name='password'
              type='password'
              required
              placeholder='Password'
              className='w-full rounded-2xl border border-slate-300 px-5 py-4 text-slate-700 outline-none transition focus:border-[#1e3a8a]'
            />
          </div>

          {/* Error Message */}
          {state.error && (
            <div className='rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-500'>
              {state.error}
            </div>
          )}

          {/* Submit */}
          <LoginButton />
        </form>

        {/* Footer */}
        <div className='mt-8 text-center'>
          <p className='text-sm text-slate-500'>
            Don&apos;t have an account?{' '}
            <Link
              href='/signup'
              className='font-semibold text-[#1e3a8a] hover:underline'
            >
              Join JUSCDC
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
