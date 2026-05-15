'use client'

import { useEffect, useState } from 'react'

import { createClient } from '@/lib/supabase/client'

interface NavbarUser {
  id: string
  fullName: string
  avatarUrl: string | null
}

export function useAuthUser() {
  const [user, setUser] = useState<NavbarUser | null>(null)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = createClient()

    async function loadUser() {
      setLoading(true)

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
        .select(
          `
            id,
            full_name,
            avatar_url
          `,
        )
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

    loadUser()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (!session?.user) {
        setUser(null)
        setLoading(false)
        return
      }

      await loadUser()
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
