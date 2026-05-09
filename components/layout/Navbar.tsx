'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Bell } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show navbar after scrolling down
      if (currentScrollY > 80) {
        setShowNavbar(true)
      } else {
        setShowNavbar(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const links = [
    { name: 'Board', href: '/board' },
    { name: 'Programs', href: '/programs' },
    { name: 'News', href: '/news' },
    { name: 'Media', href: '/media' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          initial={{ y: -120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -120, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className='fixed left-0 top-0 z-50 w-full px-4 pt-4'
        >
          <div className='mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-6 py-4 shadow-2xl backdrop-blur-2xl'>
            {/* Logo */}
            <Link href='/' className='group flex items-center gap-3'>
              <div className='overflow-hidden rounded-xl border border-white/10 bg-white/10 p-1 transition duration-300 group-hover:scale-105'>
                <Image
                  src='/logo.jpg'
                  alt='JUSCDC Logo'
                  width={42}
                  height={42}
                  className='rounded-lg object-cover'
                />
              </div>

              <div className='hidden sm:block'>
                <h1 className='text-sm font-bold tracking-wide text-white'>
                  JUSCDC
                </h1>
                <p className='text-xs text-slate-400'>
                  Career Development Club
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className='hidden items-center gap-2 md:flex'>
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className='group relative rounded-xl px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-yellow-300'
                >
                  {link.name}

                  <span className='absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-8' />
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className='hidden items-center gap-3 md:flex'>
              {/* Notification */}
              <button className='relative rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-yellow-300'>
                <Bell className='h-5 w-5' />

                <span className='absolute right-2 top-2 h-2 w-2 rounded-full bg-yellow-400' />
              </button>

              {/* Join Button */}
              <Link
                href='/membership'
                className='group inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-yellow-300'
              >
                Join Now
                <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={toggleMenu}
              className='rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 md:hidden'
            >
              {isOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className='mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-2xl md:hidden'
              >
                <div className='flex flex-col p-4'>
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className='rounded-xl px-4 py-4 text-base font-medium text-slate-300 transition hover:bg-white/10 hover:text-yellow-300'
                    >
                      {link.name}
                    </Link>
                  ))}

                  <Link
                    href='/membership'
                    className='mt-4 flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-4 font-semibold text-slate-900'
                  >
                    Join Now
                    <ArrowRight className='h-4 w-4' />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
