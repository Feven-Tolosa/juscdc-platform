'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import {
  ArrowRight,
  Bell,
  ChevronDown,
  LayoutDashboard,
  Menu,
  User,
  X,
} from 'lucide-react'

import LogoutButton from '@/components/navbar/LogoutButton'

import { useAuthUser } from '@/hooks/use-auth-user'

interface NavLink {
  name: string
  href: string
  protected?: boolean
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const [showProfileMenu, setShowProfileMenu] = useState(false)

  const { user, loading } = useAuthUser()

  useEffect(() => {
    function handleClickOutside() {
      setShowProfileMenu(false)
    }

    window.addEventListener('click', handleClickOutside)

    return () => window.removeEventListener('click', handleClickOutside)
  }, [])

  const links: NavLink[] = useMemo(
    () => [
      {
        name: 'Board',
        href: '/board',
      },

      {
        name: 'Programs',
        href: '/programs',
      },

      {
        name: 'Media',
        href: '/media',
      },

      {
        name: 'Dashboard',
        href: '/dashboard',
        protected: true,
      },

      {
        name: 'Contact',
        href: '/contact',
      },
    ],
    [],
  )

  const visibleLinks = links.filter((link) => {
    if (link.protected && !user) {
      return false
    }

    return true
  })

  return (
    <AnimatePresence>
      <motion.nav
        initial={{
          y: -120,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: -120,
          opacity: 0,
        }}
        transition={{
          duration: 0.35,
        }}
        className='fixed left-0 top-0 z-50 w-full px-4 pt-4'
      >
        <div className='mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-slate-900/70 px-6 py-4 shadow-[0_10px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl'>
          {/* Logo */}
          <Link href='/' className='group flex items-center gap-3'>
            <div className='overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-1 transition duration-300 group-hover:scale-105'>
              <Image
                src='/logo.jpg'
                alt='JUSCDC Logo'
                width={42}
                height={42}
                className='rounded-xl object-cover'
              />
            </div>

            <div className='hidden sm:block'>
              <h1 className='text-sm font-bold tracking-wide text-white'>
                JUSCDC
              </h1>

              <p className='text-xs text-slate-400'>Career Development Club</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden items-center gap-2 md:flex'>
            {visibleLinks.map((link) => (
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
            {loading ? (
              <div className='h-12 w-12 animate-pulse rounded-full bg-white/10' />
            ) : user ? (
              <>
                {/* Notifications */}
                <button className='relative rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-yellow-300'>
                  <Bell className='h-5 w-5' />

                  <span className='absolute right-2 top-2 h-2 w-2 rounded-full bg-yellow-400' />
                </button>

                {/* Profile */}
                <div className='relative'>
                  <button
                    onClick={(event) => {
                      event.stopPropagation()

                      setShowProfileMenu(!showProfileMenu)
                    }}
                    className='flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 transition hover:bg-white/10'
                  >
                    <Image
                      src={user.avatarUrl || '/users/default-avatar.jpg'}
                      alt={user.fullName}
                      width={42}
                      height={42}
                      className='h-10 w-10 rounded-xl object-cover'
                    />

                    <div className='text-left'>
                      <p className='text-sm font-semibold text-white'>
                        {user.fullName}
                      </p>

                      <p className='text-xs text-slate-400'>JUSCDC Member</p>
                    </div>

                    <ChevronDown className='h-4 w-4 text-slate-400' />
                  </button>

                  <AnimatePresence>
                    {showProfileMenu && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: 10,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className='absolute right-0 mt-3 w-64 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-2xl'
                      >
                        <div className='border-b border-white/10 p-5'>
                          <div className='flex items-center gap-3'>
                            <Image
                              src={
                                user.avatarUrl || '/users/default-avatar.jpg'
                              }
                              alt={user.fullName}
                              width={50}
                              height={50}
                              className='h-12 w-12 rounded-2xl object-cover'
                            />

                            <div>
                              <p className='font-semibold text-white'>
                                {user.fullName}
                              </p>

                              <p className='mt-1 text-sm text-slate-400'>
                                JUSCDC Member
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className='p-2'>
                          <Link
                            href='/dashboard'
                            className='flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/10'
                          >
                            <LayoutDashboard className='h-4 w-4' />
                            Dashboard
                          </Link>

                          <Link
                            href='/profile'
                            className='flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/10'
                          >
                            <User className='h-4 w-4' />
                            Profile
                          </Link>

                          <LogoutButton />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <>
                {/* Login */}
                <Link
                  href='/login'
                  className='rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10'
                >
                  Login
                </Link>

                {/* Signup */}
                <Link
                  href='/signup'
                  className='group inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-yellow-300'
                >
                  Join Now
                  <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                </Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='rounded-2xl border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 md:hidden'
          >
            {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.25,
              }}
              className='mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-2xl md:hidden'
            >
              <div className='flex flex-col p-4'>
                {visibleLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className='rounded-2xl px-4 py-4 text-base font-medium text-slate-300 transition hover:bg-white/10 hover:text-yellow-300'
                  >
                    {link.name}
                  </Link>
                ))}

                <div className='mt-4 border-t border-white/10 pt-4'>
                  {loading ? (
                    <div className='h-14 animate-pulse rounded-2xl bg-white/10' />
                  ) : user ? (
                    <div className='space-y-3'>
                      <div className='flex items-center gap-3 rounded-2xl bg-white/5 p-3'>
                        <Image
                          src={user.avatarUrl || '/users/default-avatar.jpg'}
                          alt={user.fullName}
                          width={50}
                          height={50}
                          className='h-12 w-12 rounded-xl object-cover'
                        />

                        <div>
                          <p className='font-semibold text-white'>
                            {user.fullName}
                          </p>

                          <p className='text-sm text-slate-400'>
                            JUSCDC Member
                          </p>
                        </div>
                      </div>

                      <Link
                        href='/dashboard'
                        className='flex items-center justify-center rounded-2xl bg-yellow-400 px-5 py-4 font-semibold text-slate-900'
                      >
                        Dashboard
                      </Link>

                      <LogoutButton />
                    </div>
                  ) : (
                    <div className='space-y-3'>
                      <Link
                        href='/login'
                        className='flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-semibold text-white'
                      >
                        Login
                      </Link>

                      <Link
                        href='/signup'
                        className='flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-5 py-4 font-semibold text-slate-900'
                      >
                        Join Now
                        <ArrowRight className='h-4 w-4' />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </AnimatePresence>
  )
}
