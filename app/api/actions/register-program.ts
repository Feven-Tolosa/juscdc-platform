'use server'

import { supabase } from '@/lib/supabaseClient'
import { ProgramRegistration } from '@/types/registration'

export async function registerProgram(data: ProgramRegistration) {
  try {
    const { error } = await supabase.from('program_registrations').insert(data)

    if (error) {
      if (error.message.includes('unique_student_program')) {
        return {
          success: false,
          message: 'You are already registered for this program.',
        }
      }

      return {
        success: false,
        message: error.message,
      }
    }

    return {
      success: true,
      message: 'Registration successful.',
    }
  } catch {
    return {
      success: false,
      message: 'Something went wrong.',
    }
  }
}
