'use client'

import { useState } from 'react'
import { members, Member } from './data'
import MemberCard from './MemberCard'
import MemberModal from './MemberModal'
import { motion, AnimatePresence } from 'framer-motion'

const tabs = ['Main', 'BECO', 'JiT', 'AGRI']

export default function BoardTabs() {
  const [activeTab, setActiveTab] = useState('Main')
  const [selected, setSelected] = useState<Member | null>(null)

  const heb = members.filter((m) => m.campus === 'HEB')
  const filtered = members.filter((m) => m.campus === activeTab)

  return (
    <div className='mt-16'>
      {/* 🔥 HEB Section (NOW INTERACTIVE) */}
      <h2 className='text-2xl font-semibold mb-6 text-center'>
        Higher Executive Board
      </h2>

      <div className='grid md:grid-cols-3 gap-6 mb-16'>
        {heb.map((member, i) => (
          <MemberCard
            key={i}
            member={member}
            onClick={() => setSelected(member)}
          />
        ))}
      </div>

      {/* Tabs */}
      <div className='flex gap-4 justify-center mb-10'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full transition ${
              activeTab === tab
                ? 'bg-[#1e3a8a] text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className='grid md:grid-cols-3 gap-6'
        >
          {filtered.map((member, i) => (
            <MemberCard
              key={i}
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
