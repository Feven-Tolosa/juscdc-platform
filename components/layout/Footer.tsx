'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Send, Mail, ArrowRight, MapPin, Phone } from 'lucide-react'
import { SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Board', href: '/board' },
  { name: 'Programs', href: '/programs' },
  { name: 'News', href: '/news' },
  { name: 'Membership', href: '/membership' },
  { name: 'Contact', href: '/contact' },
]

const programs = [
  { name: 'Leadership Training', href: '/programs' },
  { name: 'JU-LEAP', href: '/programs' },
  { name: 'Career Workshops', href: '/programs' },
  { name: 'Networking Events', href: '/programs' },
]

export default function Footer() {
  return (
    <footer className='relative overflow-hidden bg-[#020617] text-white'>
      {/* Background Glow */}
      <div className='absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl' />
      <div className='absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl' />

      {/* Grid Overlay */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]' />

      <div className='relative mx-auto max-w-7xl px-6 pb-8 pt-20 lg:px-12'>
        {/* Top Footer */}
        <div className='grid gap-14 lg:grid-cols-4'>
          {/* Brand */}
          <div className='lg:col-span-1'>
            <Link href='/' className='flex items-center gap-4'>
              <div className='overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl'>
                <Image
                  src='/logo.jpg'
                  alt='JUSCDC Logo'
                  width={52}
                  height={52}
                  className='rounded-xl object-cover'
                />
              </div>

              <div>
                <h2 className='text-xl font-bold'>JUSCDC</h2>

                <p className='text-sm text-slate-400'>
                  Career Development Club
                </p>
              </div>
            </Link>

            <p className='mt-6 leading-8 text-slate-400'>
              Empowering Jimma University students through leadership,
              innovation, networking, and career development opportunities.
            </p>

            {/* Social Icons */}
            <div className='mt-8 flex items-center gap-4'>
              <Link
                href='https://t.me'
                target='_blank'
                className='rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-slate-900'
              >
                <Send className='h-5 w-5' />
              </Link>

              <Link
                href='https://linkedin.com'
                target='_blank'
                className='rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0A66C2] hover:text-white'
              >
                <SlSocialLinkedin className='h-5 w-5' />
              </Link>

              <Link
                href='https://instagram.com'
                target='_blank'
                className='rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500 hover:text-white'
              >
                <SlSocialInstagram className='h-5 w-5' />
              </Link>

              <Link
                href='mailto:juscdc@example.com'
                className='rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white'
              >
                <Mail className='h-5 w-5' />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-bold text-white'>Quick Links</h3>

            <div className='mt-6 flex flex-col gap-4'>
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className='group flex items-center gap-2 text-slate-400 transition-all duration-300 hover:text-yellow-300'
                >
                  <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />

                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className='text-lg font-bold text-white'>Programs</h3>

            <div className='mt-6 flex flex-col gap-4'>
              {programs.map((program) => (
                <Link
                  key={program.name}
                  href={program.href}
                  className='group flex items-center gap-2 text-slate-400 transition-all duration-300 hover:text-yellow-300'
                >
                  <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />

                  {program.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-bold text-white'>Contact Us</h3>

            <div className='mt-6 space-y-6'>
              {/* Address */}
              <div className='flex items-start gap-4'>
                <div className='rounded-2xl border border-white/10 bg-white/5 p-3'>
                  <MapPin className='h-5 w-5 text-yellow-400' />
                </div>

                <div>
                  <p className='font-medium'>Jimma University</p>

                  <p className='mt-1 text-sm text-slate-400'>Jimma, Ethiopia</p>
                </div>
              </div>

              {/* Email */}
              <div className='flex items-start gap-4'>
                <div className='rounded-2xl border border-white/10 bg-white/5 p-3'>
                  <Mail className='h-5 w-5 text-yellow-400' />
                </div>

                <div>
                  <p className='font-medium'>Email Address</p>

                  <p className='mt-1 text-sm text-slate-400'>
                    juscdc@example.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className='flex items-start gap-4'>
                <div className='rounded-2xl border border-white/10 bg-white/5 p-3'>
                  <Phone className='h-5 w-5 text-yellow-400' />
                </div>

                <div>
                  <p className='font-medium'>Phone Number</p>

                  <p className='mt-1 text-sm text-slate-400'>
                    +251 900 000 000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='my-12 h-px bg-linear-to-r from-transparent via-white/10 to-transparent' />

        {/* Bottom Footer */}
        <div className='flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left'>
          <p className='text-sm text-slate-500'>
            © {new Date().getFullYear()} JUSCDC. All rights reserved.
          </p>

          <div className='flex items-center gap-6 text-sm text-slate-500'>
            <Link href='/privacy' className='transition hover:text-yellow-300'>
              Privacy Policy
            </Link>

            <Link href='/terms' className='transition hover:text-yellow-300'>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
