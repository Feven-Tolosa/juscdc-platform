'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-50 bg-white/80 backdrop-blur border-b'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        <h1 className='font-bold text-lg text-[#1e3a8a]'>JUSCDC</h1>

        <div className='flex gap-6 text-sm'>
          <Link href='/'>Home</Link>
          <Link href='/board'>Board</Link>
          <Link href='/programs'>Programs</Link>
          <Link href='/dashboard'>Dashboard</Link>
          <Link href='/contact'>Contact</Link>
        </div>
      </div>
    </nav>
  )
}
