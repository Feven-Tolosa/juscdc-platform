'use client'

import { useActionState, useState } from 'react'
import { Eye, EyeOff, ShieldCheck } from 'lucide-react'
// import { adminLogin } from '@/actions/admin-auth'

const inputClass =
  'w-full rounded-2xl border border-slate-700 bg-slate-800 px-5 py-4 text-slate-100 placeholder-slate-500 outline-none transition focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400'

export default function AdminLoginPage() {
  // const [state, formAction] = useActionState(adminLogin, { error: null })
  const [showPassword, setShowPassword] = useState(false)

  return (
    <main className='flex min-h-screen items-center justify-center bg-[#0a0f1e] px-6'>
      <div className='w-full max-w-md'>
        {/* Logo */}
        <div className='mb-10 flex flex-col items-center gap-3 text-center'>
          <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400'>
            <ShieldCheck className='h-8 w-8 text-[#0a0f1e]' />
          </div>
          <h1 className='text-3xl font-extrabold text-white'>Admin Portal</h1>
          <p className='text-slate-400'>JUSCDC — Restricted Access</p>
        </div>

        {/* Card */}
        <div className='rounded-[32px] bg-slate-900 p-8 shadow-2xl ring-1 ring-slate-800'>
          {/* <form action={formAction} className='space-y-5'> */}
          <form className='space-y-5'>
            <input
              name='email'
              type='email'
              required
              placeholder='Admin Email'
              className={inputClass}
            />

            <div className='relative'>
              <input
                name='password'
                type={showPassword ? 'text' : 'password'}
                required
                placeholder='Password'
                className={inputClass}
              />
              <button
                type='button'
                onClick={() => setShowPassword((v) => !v)}
                className='absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300'
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* {state.error && (
              <div className='rounded-2xl border border-red-800 bg-red-950 px-4 py-3 text-sm font-medium text-red-400'>
                {state.error}
              </div>
            )} */}

            <button
              type='submit'
              className='w-full rounded-2xl bg-yellow-400 py-4 font-bold text-[#0a0f1e] transition hover:bg-yellow-300'
            >
              Sign In to Admin
            </button>
          </form>
        </div>

        <p className='mt-6 text-center text-xs text-slate-600'>
          Not an admin?{' '}
          <a href='/login' className='text-slate-400 hover:text-white'>
            Go to member login
          </a>
        </p>
      </div>
    </main>
  )
}
