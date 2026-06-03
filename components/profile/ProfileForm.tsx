'use client'

import { useActionState, useEffect } from 'react'
import Image from 'next/image'

import {
  User,
  Building2,
  GraduationCap,
  FileText,
  Send,
  Camera,
  Save,
  IdCard,
} from 'lucide-react'

import { updateProfile } from '@/app/api/actions/profile'
import { useAuthUser } from '@/hooks/use-auth-user'
import { SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl'

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
      className='relative overflow-hidden rounded-[36px] border border-white/20 bg-white/80 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-12'
    >
      {/* Background Glow */}
      <div className='absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl' />

      <div className='relative z-10 space-y-10'>
        {/* Profile Header */}
        <div className='flex flex-col items-center gap-5 border-b border-slate-200 pb-10'>
          <div className='relative'>
            <Image
              src={user?.avatarUrl || '/users/default-avatar.jpg'}
              alt='Avatar'
              width={140}
              height={140}
              className='h-36 w-36 rounded-full border-4 border-white object-cover shadow-xl'
            />

            <label className='absolute bottom-2 right-2 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#1e3a8a] text-white shadow-lg transition hover:scale-105 hover:bg-[#172554]'>
              <Camera size={18} />

              <input
                type='file'
                name='avatar'
                accept='image/*'
                className='hidden'
              />
            </label>
          </div>

          <div className='text-center'>
            <h2 className='text-3xl font-black text-slate-900'>
              {user?.fullName || 'Your Profile'}
            </h2>

            <p className='mt-2 text-slate-500'>
              Update your profile information and social links.
            </p>
          </div>
        </div>

        {/* Personal Info */}
        <div className='space-y-6'>
          <div>
            <h3 className='text-xl font-bold text-slate-900'>
              Personal Information
            </h3>

            <p className='mt-1 text-sm text-slate-500'>
              Manage your personal details.
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-2'>
            {/* Full Name */}
            <div className='space-y-2'>
              <label className='flex items-center gap-2 font-semibold text-slate-700'>
                <User size={18} />
                Full Name
              </label>

              <input
                name='fullName'
                defaultValue={user?.fullName || ''}
                placeholder='Enter your full name'
                className='w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-800 outline-none transition focus:border-[#1e3a8a] focus:ring-4 focus:ring-blue-100'
              />
            </div>
            {/* Campus */}
            <div className='space-y-2'>
              <label className='flex items-center gap-2 font-semibold text-slate-700'>
                <Building2 size={18} />
                Campus
              </label>

              <input
                name='campus'
                defaultValue={user?.campus || ''}
                placeholder='Your campus'
                className='w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-800 outline-none transition focus:border-[#1e3a8a] focus:ring-4 focus:ring-blue-100'
              />
            </div>
            <div className='space-y-2'>
              <label className='flex items-center gap-2 font-semibold text-slate-700'>
                <IdCard size={18} />
                ID
              </label>

              <input
                name='id'
                placeholder='Your ID'
                className='w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-800 outline-none transition focus:border-[#1e3a8a] focus:ring-4 focus:ring-blue-100'
              />
            </div>
            {/* Department */}
            <div className='space-y-2 md:col-span-2'>
              <label className='flex items-center gap-2 font-semibold text-slate-700'>
                <GraduationCap size={18} />
                Department
              </label>

              <input
                name='department'
                placeholder='Software Engineering'
                className='w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-800 outline-none transition focus:border-[#1e3a8a] focus:ring-4 focus:ring-blue-100'
              />
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className='space-y-3'>
          <label className='flex items-center gap-2 font-semibold text-slate-700'>
            <FileText size={18} />
            Bio
          </label>

          <textarea
            name='bio'
            rows={6}
            defaultValue={user?.bio || ''}
            placeholder='Tell us something about yourself...'
            className='w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-800 outline-none transition focus:border-[#1e3a8a] focus:ring-4 focus:ring-blue-100'
          />
        </div>

        {/* Social Links */}
        <div className='space-y-6'>
          <div>
            <h3 className='text-xl font-bold text-slate-900'>Social Links</h3>

            <p className='mt-1 text-sm text-slate-500'>
              Connect your social profiles.
            </p>
          </div>

          <div className='grid gap-5 md:grid-cols-3'>
            {/* LinkedIn */}
            <div className='relative'>
              <SlSocialLinkedin
                size={18}
                className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400'
              />

              <input
                name='linkedinUrl'
                defaultValue={user?.linkedinUrl || ''}
                placeholder='LinkedIn URL'
                className='w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 outline-none transition focus:border-[#1e3a8a] focus:ring-4 focus:ring-blue-100'
              />
            </div>

            {/* Telegram */}
            <div className='relative'>
              <Send
                size={18}
                className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400'
              />

              <input
                name='telegramUrl'
                defaultValue={user?.telegramUrl || ''}
                placeholder='Telegram URL'
                className='w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 outline-none transition focus:border-[#1e3a8a] focus:ring-4 focus:ring-blue-100'
              />
            </div>

            {/* Instagram */}
            <div className='relative'>
              <SlSocialInstagram
                size={18}
                className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400'
              />

              <input
                name='instagramUrl'
                defaultValue={user?.instagramUrl || ''}
                placeholder='Instagram URL'
                className='w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 outline-none transition focus:border-[#1e3a8a] focus:ring-4 focus:ring-blue-100'
              />
            </div>
          </div>
        </div>

        {/* Alerts */}
        {state.error && (
          <div className='rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-600'>
            {state.error}
          </div>
        )}

        {state.success && (
          <div className='rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-green-700'>
            Profile updated successfully.
          </div>
        )}

        {/* Submit */}
        <div className='flex justify-end'>
          <button
            type='submit'
            className='flex items-center gap-3 rounded-2xl bg-[#1e3a8a] px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#172554] hover:shadow-2xl'
          >
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </div>
    </form>
  )
}
