'use server'

import { revalidatePath } from 'next/cache'

import { createClient } from '@/lib/supabase/server'

export interface ProfileState {
  error: string | null

  success: boolean
}

export async function updateProfile(
  prevState: ProfileState,
  formData: FormData,
): Promise<ProfileState> {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return {
      error: 'Unauthorized',
      success: false,
    }
  }

  const fullName = formData.get('fullName') as string

  const campus = formData.get('campus') as string

  const department = formData.get('department') as string

  const bio = formData.get('bio') as string

  const linkedinUrl = formData.get('linkedinUrl') as string

  const telegramUrl = formData.get('telegramUrl') as string

  const instagramUrl = formData.get('instagramUrl') as string

  const avatar = formData.get('avatar') as File

  let avatarUrl: string | undefined

  // Upload avatar
  if (avatar && avatar.size > 0) {
    const fileExt = avatar.name.split('.').pop()

    const filePath = `${user.id}/avatar.${fileExt}`

    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, avatar, {
        upsert: true,
      })

    if (uploadError) {
      return {
        error: 'Failed to upload avatar.',
        success: false,
      }
    }

    const { data: publicUrlData } = supabase.storage
      .from('avatars')
      .getPublicUrl(filePath)

    avatarUrl = publicUrlData.publicUrl
  }

  const updateData = {
    full_name: fullName,
    campus,
    department,
    bio,
    linkedin_url: linkedinUrl,
    telegram_url: telegramUrl,
    instagram_url: instagramUrl,
  }

  const finalData = avatarUrl
    ? {
        ...updateData,
        avatar_url: avatarUrl,
      }
    : updateData

  const { error } = await supabase
    .from('profiles')
    .update(finalData)
    .eq('id', user.id)

  if (error) {
    return {
      error: 'Failed to update profile.',
      success: false,
    }
  }

  revalidatePath('/profile')

  revalidatePath('/dashboard')

  return {
    error: null,
    success: true,
  }
}
