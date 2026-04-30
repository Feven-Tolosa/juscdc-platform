'use client'

import { useState, FormEvent } from 'react'
import { signUp } from '@/lib/auth'

export default function SignupPage() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { error } = await signUp(email, password)

    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Account created. Check your email.')
    }
  }

  return (
    <div className='max-w-md mx-auto mt-10'>
      <h1 className='text-2xl font-bold mb-4'>Signup</h1>

      <form onSubmit={handleSubmit} className='space-y-4'>
        <input
          type='email'
          placeholder='Email'
          className='w-full p-2 border rounded'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type='password'
          placeholder='Password'
          className='w-full p-2 border rounded'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className='w-full bg-blue-600 text-white p-2 rounded'>
          Sign Up
        </button>
      </form>

      {message && <p className='mt-4 text-sm'>{message}</p>}
    </div>
  )
}
