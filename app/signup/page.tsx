'use client'

import Link from 'next/link'
import { useState, useActionState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import SignupButton from '@/components/auth/SignupButton'
import { signup } from '../api/actions/auth'

const CAMPUSES = ['Main Campus', 'BECO', 'JiT', 'AGRI'] as const

const inputClass =
  'w-full rounded-2xl border border-slate-300 px-5 py-4 text-slate-700 outline-none transition focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]'

export default function SignupPage() {
  const [state, formAction] = useActionState(signup, { error: null })
  const [showPassword, setShowPassword] = useState(false)

  return (
    <main className='flex min-h-screen items-center justify-center bg-[#f8fafc] px-6 py-32'>
      <div className='w-full max-w-xl rounded-[40px] bg-white p-10 shadow-2xl'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-4xl font-extrabold text-slate-900'>
            Create Account
          </h1>
          <p className='mt-3 text-slate-500'>
            Join the JUSCDC membership platform.
          </p>
        </div>

        {/* Form */}
        <form action={formAction} className='space-y-5'>
          {/* Full Name */}
          <input
            name='fullName'
            required
            placeholder='Full Name'
            className={inputClass}
          />

          {/* Student ID */}
          <input
            name='studentId'
            required
            placeholder='Student ID (e.g. JU12345)'
            className={inputClass}
          />

          {/* Campus — select, not free text */}
          <select
            name='campus'
            required
            defaultValue=''
            className={`${inputClass} cursor-pointer bg-white`}
          >
            <option value='' disabled>
              Select Campus
            </option>
            {CAMPUSES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {/* Department */}
          <input
            name='department'
            required
            placeholder='Department (e.g. Software Engineering)'
            className={inputClass}
          />

          {/* Email */}
          <input
            name='email'
            type='email'
            required
            placeholder='Email'
            className={inputClass}
          />

          {/* Password */}
          <div className='relative'>
            <input
              name='password'
              type={showPassword ? 'text' : 'password'}
              required
              placeholder='Password (min 6 characters)'
              className={inputClass}
            />
            <button
              type='button'
              onClick={() => setShowPassword((v) => !v)}
              className='absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700'
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Error message */}
          {state.error && (
            <div className='rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-500'>
              {state.error}
            </div>
          )}

          <SignupButton />
        </form>

        {/* Footer */}
        <div className='mt-8 text-center'>
          <p className='text-sm text-slate-500'>
            Already have an account?{' '}
            <Link
              href='/login'
              className='font-semibold text-[#1e3a8a] hover:underline'
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
