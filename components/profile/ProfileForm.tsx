'use client'

import { useActionState, useEffect } from 'react'

import Image from 'next/image'

import { updateProfile } from '@/actions/profile'

import { useAuthUser } from '@/hooks/use-auth-user'

const initialState = {
  error: null,
  success: false,
}

export default function ProfileForm() {
  const [state, formAction] = useActionState(updateProfile, initialState)

  const { user } = useAuthUser()

  useEffect(() => {
    if (state.success) {
      console.log('Profile updated')
    }
  }, [state.success])

  return (
    <form
      action={formAction}
      className='space-y-8 rounded-[40px] bg-white p-10 shadow-xl'
    >
      {/* Avatar */}
      <div className='flex flex-col items-center gap-5'>
        <Image
          src={user?.avatarUrl || '/users/default-avatar.jpg'}
          alt='Avatar'
          width={120}
          height={120}
          className='h-32 w-32 rounded-full object-cover'
        />

        <input
          type='file'
          name='avatar'
          accept='image/*'
          className='text-sm text-slate-500'
        />
      </div>

      {/* Full Name */}
      <div>
        <label className='mb-2 block font-semibold text-slate-700'>
          Full Name
        </label>

        <input
          name='fullName'
          defaultValue={user?.fullName}
          className='w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-[#1e3a8a]'
        />
      </div>

      {/* Campus */}
      <div>
        <label className='mb-2 block font-semibold text-slate-700'>
          Campus
        </label>

        <input
          name='campus'
          className='w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-[#1e3a8a]'
        />
      </div>

      {/* Department */}
      <div>
        <label className='mb-2 block font-semibold text-slate-700'>
          Department
        </label>

        <input
          name='department'
          className='w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-[#1e3a8a]'
        />
      </div>

      {/* Bio */}
      <div>
        <label className='mb-2 block font-semibold text-slate-700'>Bio</label>

        <textarea
          name='bio'
          rows={5}
          className='w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-[#1e3a8a]'
        />
      </div>

      {/* Socials */}
      <div className='grid gap-5 md:grid-cols-3'>
        <input
          name='linkedinUrl'
          placeholder='LinkedIn URL'
          className='rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-[#1e3a8a]'
        />

        <input
          name='telegramUrl'
          placeholder='Telegram URL'
          className='rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-[#1e3a8a]'
        />

        <input
          name='instagramUrl'
          placeholder='Instagram URL'
          className='rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-[#1e3a8a]'
        />
      </div>

      {/* Error */}
      {state.error && (
        <div className='rounded-2xl bg-red-50 px-4 py-3 text-red-500'>
          {state.error}
        </div>
      )}

      {/* Success */}
      {state.success && (
        <div className='rounded-2xl bg-green-50 px-4 py-3 text-green-600'>
          Profile updated successfully.
        </div>
      )}

      {/* Submit */}
      <button
        type='submit'
        className='rounded-2xl bg-[#1e3a8a] px-8 py-4 font-semibold text-white transition hover:bg-[#172554]'
      >
        Save Changes
      </button>
    </form>
  )
}
