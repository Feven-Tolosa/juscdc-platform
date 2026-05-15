'use client'

import { useFormStatus } from 'react-dom'

export default function SignupButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      disabled={pending}
      className='w-full rounded-2xl bg-[#1e3a8a] px-5 py-4 font-semibold text-white transition hover:bg-[#172554] disabled:cursor-not-allowed disabled:opacity-60'
    >
      {pending ? 'Creating Account...' : 'Create Account'}
    </button>
  )
}
