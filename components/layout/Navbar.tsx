'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='fixed w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/20'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white'>
        <Link href='/'>
          {' '}
          <h1>JUSCDC</h1>
        </Link>
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
