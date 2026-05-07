'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const links = [
    { name: 'Board', href: '/board' },
    { name: 'Programs', href: '/programs' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className='fixed w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/20'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white'>
        {/* Logo */}
        <Link href='/'>
          <h1 className='text-xl font-bold'>JUSCDC</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex gap-6 text-sm'>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='hover:text-gray-300 transition-colors'
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center'>
          <button
            onClick={toggleMenu}
            className='text-white focus:outline-none'
            aria-label='Toggle menu'
          >
            {isOpen ? (
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className='md:hidden bg-black/80 backdrop-blur-2xl border-b border-white/10'>
          <div className='flex flex-col space-y-4 px-6 py-6 text-white'>
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className='text-lg font-medium hover:text-gray-400'
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
