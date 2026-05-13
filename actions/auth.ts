'use server'

import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export async function signup(formData: FormData): Promise<void> {
  const supabase = await createClient()

  const email = formData.get('email') as string

  const password = formData.get('password') as string

  const fullName = formData.get('fullName') as string

  const studentId = formData.get('studentId') as string

  const campus = formData.get('campus') as string

  const department = formData.get('department') as string

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    throw new Error(error.message)
  }

  if (data.user) {
    const { error: profileError } = await supabase.from('profiles').insert({
      id: data.user.id,
      full_name: fullName,
      student_id: studentId,
      email,
      campus,
      department,
    })

    if (profileError) {
      throw new Error(profileError.message)
    }
  }

  redirect('/dashboard')
}

export async function login(formData: FormData): Promise<void> {
  const supabase = await createClient()

  const email = formData.get('email') as string

  const password = formData.get('password') as string

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw new Error(error.message)
  }

  redirect('/dashboard')
}

export async function logout(): Promise<void> {
  const supabase = await createClient()

  await supabase.auth.signOut()

  redirect('/login')
}
