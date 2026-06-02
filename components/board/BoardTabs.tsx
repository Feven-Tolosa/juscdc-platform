'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import MemberCard from './MemberCard'
import MemberModal from './MemberModal'
import { Member } from './types'
import { supabase } from '@/lib/supabase/supabaseClient'

const tabs = ['Main', 'BECO', 'JiT', 'AGRI']

export default function BoardTabs() {
  const [members, setMembers] = useState<Member[]>([])
  const [activeTab, setActiveTab] = useState('Main')
  const [selected, setSelected] = useState<Member | null>(null)
  const [search, setSearch] = useState('')

  async function fetchMembers() {
    const { data, error } = await supabase.from('members').select('*')

    if (error) {
      console.error(error)
      return
    }

    setMembers((data ?? []) as Member[])
  }

  useEffect(() => {
    fetchMembers()

    const channel = supabase
      .channel('members-realtime')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'members',
        },
        () => {
          fetchMembers()
        },
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const heb = members.filter((m) => m.campus === 'HEB')

  const filtered = members.filter(
    (m) =>
      m.campus === activeTab &&
      m.name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className='mt-16'>
      {/* HEB */}
      <h2 className='mb-6 text-center text-2xl font-semibold'>
        Higher Executive Board
      </h2>

      <div className='mb-16 grid gap-6 md:grid-cols-3'>
        {heb.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            onClick={() => setSelected(member)}
          />
        ))}
      </div>

      {/* Search */}
      <div className='mx-auto mb-8 max-w-md'>
        <input
          type='text'
          placeholder='Search members...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder-gray-400 backdrop-blur'
        />
      </div>

      {/* Tabs */}
      <div className='mb-10 flex flex-wrap justify-center gap-4'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-5 py-2 transition ${
              activeTab === tab
                ? 'bg-[#112662] text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Members */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className='grid gap-6 md:grid-cols-3'
        >
          {filtered.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
              onClick={() => setSelected(member)}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Modal */}
      <MemberModal member={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
