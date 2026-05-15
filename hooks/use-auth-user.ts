'use client'

import { useEffect, useState } from 'react'

import { NavbarUser } from '@/components/navbar/types'
import { createClient } from '@/lib/supabase/client'

export function useAuthUser() {
  const [user, setUser] = useState<NavbarUser | null>(null)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = createClient()

    async function getUser() {
      const {
        data: { user: authUser },
      } = await supabase.auth.getUser()

      if (!authUser) {
        setUser(null)
        setLoading(false)
        return
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', authUser.id)
        .single()

      if (!profile) {
        setUser(null)
        setLoading(false)
        return
      }

      setUser({
        id: profile.id,
        fullName: profile.full_name,
        avatarUrl: profile.avatar_url,
      })

      setLoading(false)
    }

    getUser()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      getUser()
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return {
    user,
    loading,
  }
}
