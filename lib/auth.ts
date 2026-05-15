import { AuthError, User } from '@supabase/supabase-js'
import { supabase } from './supabase/supabaseClient'

interface AuthResponse {
  user: User | null
  error: AuthError | null
}

export const signUp = async (
  email: string,
  password: string,
): Promise<AuthResponse> => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  return { user: data.user, error }
}

export const signIn = async (
  email: string,
  password: string,
): Promise<AuthResponse> => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  return { user: data.user, error }
}

export const signOut = async (): Promise<void> => {
  await supabase.auth.signOut()
}
