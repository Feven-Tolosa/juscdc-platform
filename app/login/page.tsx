'use client'

import { useState, FormEvent } from 'react'
import { signIn } from '@/lib/auth'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorMsg, setErrorMsg] = useState<string>('')

  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { user, error } = await signIn(email, password)

    if (error) {
      setErrorMsg(error.message)
      return
    }

    if (user) {
      router.push('/dashboard')
    }
  }

  return (
    <div className='max-w-md mx-auto mt-10'>
      <h1 className='text-2xl font-bold mb-4'>Login</h1>

      <form onSubmit={handleSubmit} className='space-y-4'>
        <input
          type='email'
          className='w-full p-2 border rounded'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type='password'
          className='w-full p-2 border rounded'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className='w-full bg-blue-600 text-white p-2 rounded'>
          Login
        </button>
      </form>

      {errorMsg && <p className='text-red-500 mt-4'>{errorMsg}</p>}
    </div>
  )
}
