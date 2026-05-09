'use client'

interface RegistrationFormProps {
  onClose: () => void
}

export default function RegistrationForm({ onClose }: RegistrationFormProps) {
  return (
    <div className='mt-8 rounded-[30px] bg-slate-50 p-6'>
      <h3 className='text-2xl font-bold text-slate-900'>
        Program Registration
      </h3>

      <form className='mt-6 space-y-5'>
        <div>
          <label className='mb-2 block text-sm font-medium text-slate-700'>
            Full Name
          </label>

          <input
            type='text'
            placeholder='Enter your full name'
            className='w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#1e3a8a]'
          />
        </div>

        <div>
          <label className='mb-2 block text-sm font-medium text-slate-700'>
            Student ID
          </label>

          <input
            type='text'
            placeholder='JU12345'
            className='w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#1e3a8a]'
          />
        </div>

        <div>
          <label className='mb-2 block text-sm font-medium text-slate-700'>
            Email Address
          </label>

          <input
            type='email'
            placeholder='example@gmail.com'
            className='w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#1e3a8a]'
          />
        </div>

        <div className='flex gap-4 pt-4'>
          <button
            type='submit'
            className='flex-1 rounded-2xl bg-[#1e3a8a] px-5 py-4 font-semibold text-white transition hover:bg-[#172554]'
          >
            Register Now
          </button>

          <button
            type='button'
            onClick={onClose}
            className='rounded-2xl border border-slate-200 px-5 py-4 font-semibold text-slate-700 transition hover:bg-slate-100'
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
