'use client'
import { Users, Briefcase, GraduationCap } from 'lucide-react'

export default function Stats() {
  return (
    <section className='py-20 px-6 bg-white'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center'>
        {/* Stats */}
        <div className='mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3'>
          <div className='rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md'>
            <Users className='mb-3 h-8 w-8 text-yellow-400' />
            <h3 className='text-3xl font-bold'>500+</h3>
            <p className='mt-1 text-sm text-slate-300'>Active Members</p>
          </div>

          <div className='rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md'>
            <Briefcase className='mb-3 h-8 w-8 text-yellow-400' />
            <h3 className='text-3xl font-bold'>20+</h3>
            <p className='mt-1 text-sm text-slate-300'>Career Programs</p>
          </div>

          <div className='rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md'>
            <GraduationCap className='mb-3 h-8 w-8 text-yellow-400' />
            <h3 className='text-3xl font-bold'>4</h3>
            <p className='mt-1 text-sm text-slate-300'>Campuses Connected</p>
          </div>
        </div>
      </div>
    </section>
  )
}
