import Link from 'next/link'

import { socialLinks } from './data'

export default function SocialLinks() {
  return (
    <div className='rounded-[36px] bg-white p-8 shadow-xl'>
      <h2 className='text-3xl font-bold text-slate-900'>Connect With Us</h2>

      <div className='mt-8 flex flex-wrap gap-5'>
        {socialLinks.map((social) => {
          const Icon = social.icon

          return (
            <Link
              key={social.name}
              href={social.url}
              target='_blank'
              className='flex items-center gap-3 rounded-2xl bg-slate-100 px-5 py-4 font-medium text-slate-700 transition hover:bg-[#1e3a8a] hover:text-white'
            >
              <Icon className='h-5 w-5' />

              {social.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
