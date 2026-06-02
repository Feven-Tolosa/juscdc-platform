'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { Camera, Loader2 } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { DashboardUser } from './types'

interface ProfileCardProps {
  user: DashboardUser
}

export default function ProfileCard({ user }: ProfileCardProps) {
  const [avatarSrc, setAvatarSrc] = useState(user.image)
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  const supabase = createClient()

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Preview immediately
    const preview = URL.createObjectURL(file)
    setAvatarSrc(preview)
    setUploading(true)

    try {
      const ext = file.name.split('.').pop()
      const path = `${user.id}/avatar.${ext}`

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(path, file, { upsert: true })

      if (uploadError) throw uploadError

      const {
        data: { publicUrl },
      } = supabase.storage.from('avatars').getPublicUrl(path)

      await supabase
        .from('profiles')
        .update({ avatar_url: publicUrl })
        .eq('id', user.id)

      setAvatarSrc(publicUrl)
    } catch (err) {
      console.error('Avatar upload failed:', err)
      setAvatarSrc(user.image) // revert on error
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className='rounded-[36px] bg-white p-8 shadow-xl'>
      <div className='flex flex-col items-center text-center'>
        {/* Avatar with upload overlay */}
        <div
          className='group relative h-32 w-32 cursor-pointer overflow-hidden rounded-full'
          onClick={() => fileRef.current?.click()}
        >
          <Image
            src={avatarSrc}
            alt={user.fullName}
            fill
            className='object-cover'
          />
          {/* Hover overlay */}
          <div className='absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100'>
            {uploading ? (
              <Loader2 className='h-6 w-6 animate-spin text-white' />
            ) : (
              <Camera className='h-6 w-6 text-white' />
            )}
          </div>
        </div>

        <input
          ref={fileRef}
          type='file'
          accept='image/*'
          className='hidden'
          onChange={handleAvatarChange}
        />

        <h2 className='mt-6 text-3xl font-bold text-slate-900'>
          {user.fullName}
        </h2>
        <p className='mt-2 text-[#112662]'>{user.department}</p>

        <div className='mt-8 w-full space-y-4'>
          {[
            { label: 'Student ID', value: user.studentId },
            { label: 'Campus', value: user.campus },
            { label: 'Email', value: user.email },
          ].map(({ label, value }) => (
            <div key={label} className='rounded-2xl bg-slate-50 p-4 text-left'>
              <p className='text-sm text-slate-500'>{label}</p>
              <p className='mt-1 truncate font-semibold text-slate-900'>
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
