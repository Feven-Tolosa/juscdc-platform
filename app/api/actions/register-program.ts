// app/api/actions/register-program.ts
'use server'

import { supabase } from '@/lib/supabase/supabaseClient'

interface RegisterProgramInput {
  full_name: string
  student_id: string
  email: string
  campus: string
  department: string
  program_id: string
  program_title: string
}

export async function registerProgram(input: RegisterProgramInput) {
  // Check for duplicate registration
  const { data: existing } = await supabase
    .from('registrations')
    .select('id')
    .eq('program_id', input.program_id)
    .eq('student_id', input.student_id)
    .single()

  if (existing) {
    return {
      success: false,
      message: 'You have already registered for this program.',
    }
  }

  const { error } = await supabase.from('registrations').insert([
    {
      full_name: input.full_name,
      student_id: input.student_id,
      email: input.email,
      campus: input.campus,
      department: input.department,
      program_id: input.program_id,
      program_title: input.program_title,
      registered_at: new Date().toISOString(),
    },
  ])

  if (error) {
    console.error('Registration error:', error)
    return {
      success: false,
      message: 'Registration failed. Please try again.',
    }
  }

  return {
    success: true,
    message: `Successfully registered for ${input.program_title}!`,
  }
}
