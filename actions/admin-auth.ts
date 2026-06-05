'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export interface AdminAuthState {
  error: string | null
}

export async function adminLogin(
  prevState: AdminAuthState,
  formData: FormData,
): Promise<AdminAuthState> {
  const supabase = await createClient()

  const email    = (formData.get('email')    as string).trim()
  const password =  formData.get('password') as string

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error || !data.user) {
    return { error: 'Invalid email or password.' }
  }

  // Verify the user is in the admins table
  const { data: adminRow } = await supabase
    .from('admins')
    .select('id')
    .eq('id', data.user.id)
    .maybeSingle()

  if (!adminRow) {
    // Sign them back out — if they're not an admin
    await supabase.auth.signOut()
    return { error: 'You do not have admin access.' }
  }

  redirect('/admin')
}
