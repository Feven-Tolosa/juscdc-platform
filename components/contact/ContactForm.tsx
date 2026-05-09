'use client'

import { sendContactMessage } from '@/app/api/actions/send-contact-message'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setLoading(true)

    const formData = new FormData(event.currentTarget)

    const response = await sendContactMessage(formData)

    setLoading(false)

    if (response.success) {
      toast.success(response.message)

      event.currentTarget.reset()

      return
    }

    toast.error('Something went wrong.')
  }

  return (
    <div className='rounded-[36px] bg-white p-8 shadow-xl'>
      <h2 className='text-3xl font-bold text-slate-900'>Send Message</h2>

      <form onSubmit={handleSubmit} className='mt-8 space-y-5'>
        <input
          name='name'
          required
          type='text'
          placeholder='Full Name'
          className='w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#112662]'
        />

        <input
          name='email'
          required
          type='email'
          placeholder='Email Address'
          className='w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#112662]'
        />

        <input
          name='subject'
          required
          type='text'
          placeholder='Subject'
          className='w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#112662]'
        />

        <textarea
          name='message'
          required
          rows={6}
          placeholder='Your message...'
          className='w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#112662]'
        />

        <button
          type='submit'
          disabled={loading}
          className='w-full rounded-2xl bg-[#112662] px-5 py-4 font-semibold text-white transition hover:bg-[#172554] disabled:opacity-50'
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
