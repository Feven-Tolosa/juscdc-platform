'use client'

import { registerProgram } from '@/app/api/actions/register-program'
import { useState } from 'react'
import toast from 'react-hot-toast'

interface RegistrationFormProps {
  programId: string
  programTitle: string
  onClose: () => void
}

export default function RegistrationForm({
  programId,
  programTitle,
  onClose,
}: RegistrationFormProps) {
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    full_name: '',
    student_id: '',
    email: '',
    campus: '',
    department: '',
  })

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setLoading(true)

    const response = await registerProgram({
      ...formData,
      program_id: programId,
      program_title: programTitle,
    })

    setLoading(false)

    if (response.success) {
      toast.success(response.message)

      onClose()

      return
    }

    toast.error(response.message)
  }

  return (
    <div>
      <h2 className='text-3xl font-bold text-slate-900'>
        Register for {programTitle}
      </h2>

      <form onSubmit={handleSubmit} className='mt-8 space-y-5'>
        <input
          type='text'
          required
          placeholder='Full Name'
          value={formData.full_name}
          onChange={(event) =>
            setFormData({
              ...formData,
              full_name: event.target.value,
            })
          }
          className='w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#112662]'
        />

        <input
          type='text'
          required
          placeholder='Student ID'
          value={formData.student_id}
          onChange={(event) =>
            setFormData({
              ...formData,
              student_id: event.target.value,
            })
          }
          className='w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#112662]'
        />

        <input
          type='email'
          required
          placeholder='Email Address'
          value={formData.email}
          onChange={(event) =>
            setFormData({
              ...formData,
              email: event.target.value,
            })
          }
          className='w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#112662]'
        />

        <input
          type='text'
          required
          placeholder='Campus'
          value={formData.campus}
          onChange={(event) =>
            setFormData({
              ...formData,
              campus: event.target.value,
            })
          }
          className='w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#112662]'
        />

        <input
          type='text'
          required
          placeholder='Department'
          value={formData.department}
          onChange={(event) =>
            setFormData({
              ...formData,
              department: event.target.value,
            })
          }
          className='w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#112662]'
        />

        <button
          type='submit'
          disabled={loading}
          className='w-full rounded-2xl bg-[#112662] px-5 py-4 font-semibold text-white transition hover:bg-[#172554] disabled:opacity-50'
        >
          {loading ? 'Registering...' : 'Complete Registration'}
        </button>
      </form>
    </div>
  )
}
