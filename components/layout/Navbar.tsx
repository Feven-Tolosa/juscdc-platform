'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 glass border-b border-[var(--border)]'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        <h1 className='font-bold text-lg'>JUSCDC</h1>

        <nav className='hidden md:flex gap-8 text-sm'>
          <Link href='/'>Home</Link>
          <Link href='/board'>Board</Link>
          <Link href='/programs'>Programs</Link>
        </nav>

        <Link
          href='/login'
          className='px-4 py-2 rounded-lg bg-[var(--primary)] text-white text-sm'
        >
          Login
        </Link>
      </div>
    </header>
  )
}
