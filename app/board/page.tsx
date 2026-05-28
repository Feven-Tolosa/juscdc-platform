'use client'

import { useEffect, useState } from 'react'

import BoardHero from '@/components/board/BoardHero'
import ExecutiveCard from '@/components/board/ExecutiveCard'
import MemberCard from '@/components/board/MemberCard'
import CampusTabs from '@/components/board/CampusTabs'
import MemberModal from '@/components/board/MemberModal'

import { Member } from '@/components/board/types'
import { supabase } from '@/lib/supabase/supabaseClient'

export default function BoardPage() {
  const [activeCampus, setActiveCampus] = useState('Main')

  const [selectedMember, setSelectedMember] = useState<Member | null>(null)

  const [members, setMembers] = useState<Member[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMembers()
  }, [])

  async function fetchMembers() {
    setLoading(true)

    const { data, error } = await supabase
      .from('board_members')
      .select('*')
      .order('created_at', { ascending: true })

    if (error) {
      console.error(error)
    } else {
      setMembers(data || [])
    }

    setLoading(false)
  }

  const hebMembers = members.filter((member) => member.category === 'HEB')

  const campusMembers = members.filter(
    (member) => member.category === 'Campus' && member.campus === activeCampus,
  )

  const campuses = [
    ...new Set(
      members.filter((m) => m.category === 'Campus').map((m) => m.campus),
    ),
  ]

  return (
    <main className='min-h-screen bg-[#f8fafc]'>
      <BoardHero />

      {loading ? (
        <div className='py-32 text-center text-lg font-medium'>
          Loading board members...
        </div>
      ) : (
        <>
          {/* HEB */}
          <section className='mx-auto max-w-7xl px-6 py-24 lg:px-12'>
            <div className='mb-14 text-center'>
              <h2 className='text-4xl font-extrabold text-slate-900'>
                Higher Executive Board
              </h2>
            </div>

            <div className='grid gap-10 lg:grid-cols-3'>
              {hebMembers.map((member) => (
                <ExecutiveCard
                  key={member.id}
                  member={member}
                  onOpen={setSelectedMember}
                />
              ))}
            </div>
          </section>

          {/* CAMPUS */}
          <section className='mx-auto max-w-7xl px-6 pb-24 lg:px-12'>
            <div className='mb-12 text-center'>
              <h2 className='text-4xl font-extrabold text-slate-900'>
                Campus Leadership Teams
              </h2>
            </div>

            <CampusTabs
              campuses={campuses}
              activeCampus={activeCampus}
              onChange={setActiveCampus}
            />

            <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-4'>
              {campusMembers.map((member) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  onClick={() => setSelectedMember(member)}
                />
              ))}
            </div>
          </section>
        </>
      )}

      <MemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </main>
  )
}
