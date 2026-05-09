'use client'

import { useState } from 'react'

import BoardHero from '@/components/board/BoardHero'
import ExecutiveCard from '@/components/board/ExecutiveCard'
import MemberCard from '@/components/board/MemberCard'
import CampusTabs from '@/components/board/CampusTabs'
import MemberModal from '@/components/board/MemberModal'

import { campuses, hebMembers } from '@/components/board/data'
import { Member } from '@/components/board/types'

export default function BoardPage() {
  const [activeCampus, setActiveCampus] = useState<string>('Main')

  const [selectedMember, setSelectedMember] = useState<Member | null>(null)

  return (
    <main className='min-h-screen bg-[#f8fafc]'>
      <BoardHero />

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
              key={member.name}
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
          campuses={Object.keys(campuses)}
          activeCampus={activeCampus}
          onChange={setActiveCampus}
        />

        <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-4'>
          {campuses[activeCampus].map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <MemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </main>
  )
}
