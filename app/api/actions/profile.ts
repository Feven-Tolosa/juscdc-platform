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
  try {
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
    const id = formData.get('id') as string
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
        console.error(uploadError)

        return {
          error: uploadError.message,
          success: false,
        }
      }

      const { data: publicUrlData } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath)

      avatarUrl = publicUrlData.publicUrl
    }

    const updateData = {
      ...(fullName && { full_name: fullName }),
      ...(id && { student_id: id }),
      ...(campus && { campus }),
      ...(department && { department }),
      ...(bio && { bio }),
      ...(linkedinUrl && { linkedin_url: linkedinUrl }),
      ...(telegramUrl && { telegram_url: telegramUrl }),
      ...(instagramUrl && { instagram_url: instagramUrl }),
      ...(avatarUrl && { avatar_url: avatarUrl }),
    }

    const { error } = await supabase
      .from('profiles')
      .update(updateData)
      .eq('id', user.id)

    if (error) {
      console.error(error)

      return {
        error: error.message,
        success: false,
      }
    }

    revalidatePath('/profile')
    revalidatePath('/dashboard')

    return {
      error: null,
      success: true,
    }
  } catch (error) {
    console.error(error)

    return {
      error: 'Something went wrong.',
      success: false,
    }
  }
}
