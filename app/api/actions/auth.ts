'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export interface AuthState {
  error: string | null
}

const VALID_CAMPUSES = ['Main Campus', 'BECO', 'JiT', 'AGRI'] as const
type Campus = (typeof VALID_CAMPUSES)[number]

//  LOGIN
export async function login(
  prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return { error: 'Invalid email or password.' }
  }

  redirect('/dashboard')
}

//  SIGNUP
export async function signup(
  prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const supabase = await createClient()

  const fullName = (formData.get('fullName') as string).trim()
  const studentId = (formData.get('studentId') as string).trim()
  const campus = (formData.get('campus') as string).trim()
  const department = (formData.get('department') as string).trim()
  const email = (formData.get('email') as string).trim()
  const password = formData.get('password') as string

  if (!fullName) return { error: 'Full name is required.' }
  if (!studentId) return { error: 'Student ID is required.' }
  if (!department) return { error: 'Department is required.' }

  if (!VALID_CAMPUSES.includes(campus as Campus)) {
    return { error: 'Please select a valid campus.' }
  }

  if (password.length < 6) {
    return { error: 'Password must be at least 6 characters.' }
  }

  const { data: existing } = await supabase
    .from('members')
    .select('id')
    .eq('student_id', studentId)
    .maybeSingle()

  if (existing) {
    return { error: 'A member with this Student ID already exists.' }
  }

  const { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName, student_id: studentId, campus, department },
    },
  })

  if (signUpError) {
    if (signUpError.message.toLowerCase().includes('already registered')) {
      return { error: 'An account with this email already exists.' }
    }
    return { error: signUpError.message || 'Failed to create account.' }
  }

  if (!data.user) {
    return { error: 'Unable to create user account. Please try again.' }
  }

  const userId = data.user.id

  const { error: profileError } = await supabase.from('profiles').upsert({
    id: userId,
    full_name: fullName,
    student_id: studentId,
    campus,
    department,
    email,
  })

  if (profileError) {
    console.error('Profile insert error:', profileError)
    return {
      error:
        'Account created but profile setup failed. Please contact support.',
    }
  }

  const { error: memberError } = await supabase.from('members').upsert({
    id: userId,
    full_name: fullName,
    student_id: studentId,
    campus,
    department,
    email,
  })

  if (memberError) {
    console.error('Member insert error:', memberError)
  }

  redirect('/dashboard')
}
