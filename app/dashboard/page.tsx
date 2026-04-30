'use client'

import { useUser } from '@/hooks/useUser'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function DashboardPage() {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading) return <p>Loading...</p>

  return (
    <div className='p-6'>
      <h1 className='text-xl font-bold'>Dashboard</h1>
      <p>Welcome {user?.email}</p>
    </div>
  )
}
