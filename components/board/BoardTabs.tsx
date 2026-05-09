'use client'

import { useEffect, useState } from 'react'
import MemberCard from './MemberCard'
import MemberModal from './MemberModal'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '@/lib/supabaseClient'

type Member = {
  id: string
  name: string
  role: string
  campus: string
  bio: string
  image: string
  linkedin?: string
  telegram?: string
}

const tabs = ['Main', 'BECO', 'JiT', 'AGRI']

export default function BoardTabs() {
  const [members, setMembers] = useState<Member[]>([])
  const [activeTab, setActiveTab] = useState('Main')
  const [selected, setSelected] = useState<Member | null>(null)
  const [search, setSearch] = useState('')

  async function fetchMembers() {
    const { data, error } = await supabase.from('members').select('*')

    if (!error && data) {
      setMembers(data)
    }
  }
  // FETCH MEMBERS
  useEffect(() => {
    fetchMembers()

    // REALTIME SUBSCRIPTION
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
      <h2 className='text-2xl font-semibold mb-6 text-center'>
        Higher Executive Board
      </h2>

      <div className='grid md:grid-cols-3 gap-6 mb-16'>
        {heb.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            onClick={() => setSelected(member)}
          />
        ))}
      </div>

      {/* Search */}
      <div className='max-w-md mx-auto mb-8'>
        <input
          type='text'
          placeholder='Search members...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 backdrop-blur'
        />
      </div>

      {/* Tabs */}
      <div className='flex gap-4 justify-center mb-10 flex-wrap'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full transition ${
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
          className='grid md:grid-cols-3 gap-6'
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
