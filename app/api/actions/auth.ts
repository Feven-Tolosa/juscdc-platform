'use server'

import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export interface AuthState {
  error: string | null
}

export async function login(
  prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const supabase = await createClient()

  const email = formData.get('email') as string

  const password = formData.get('password') as string

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return {
      error: 'Invalid email or password.',
    }
  }

  redirect('/dashboard')
}

export interface SignupState {
  error: string | null
}

export async function signup(
  prevState: SignupState,
  formData: FormData,
): Promise<SignupState> {
  const supabase = await createClient()

  const fullName = formData.get('fullName') as string

  const studentId = formData.get('studentId') as string

  const campus = formData.get('campus') as string

  const department = formData.get('department') as string

  const email = formData.get('email') as string

  const password = formData.get('password') as string

  // Basic validation
  if (password.length < 6) {
    return {
      error: 'Password must be at least 6 characters.',
    }
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    return {
      error: error.message || 'Failed to create account.',
    }
  }

  if (!data.user) {
    return {
      error: 'Unable to create user account.',
    }
  }

  const { error: profileError } = await supabase.from('profiles').insert({
    id: data.user.id,
    full_name: fullName,
    student_id: studentId,
    campus,
    department,
    email,
  })

  if (profileError) {
    return {
      error: 'Account created, but profile setup failed.',
    }
  }

  redirect('/dashboard')
}
