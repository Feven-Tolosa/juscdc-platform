import { Download, BadgeCheck } from 'lucide-react'

import { DashboardUser } from './types'

interface DigitalIDCardProps {
  user: DashboardUser
}

export default function DigitalIDCard({ user }: DigitalIDCardProps) {
  return (
    <div className='overflow-hidden rounded-[36px] bg-gradient-to-br from-[#112662] to-[#0f172a] p-8 text-white shadow-2xl'>
      <div className='flex items-start justify-between'>
        <div>
          <p className='text-sm text-slate-300'>Jimma University</p>

          <h2 className='mt-2 text-3xl font-extrabold'>JUSCDC ID</h2>
        </div>

        <BadgeCheck className='h-10 w-10 text-yellow-400' />
      </div>

      <div className='mt-14 space-y-4'>
        <div>
          <p className='text-sm text-slate-300'>Full Name</p>

          <h3 className='mt-1 text-2xl font-bold'>{user.fullName}</h3>
        </div>

        <div>
          <p className='text-sm text-slate-300'>Student ID</p>

          <h3 className='mt-1 text-xl font-semibold'>{user.studentId}</h3>
        </div>

        <div>
          <p className='text-sm text-slate-300'>Department</p>

          <h3 className='mt-1 text-xl font-semibold'>{user.department}</h3>
        </div>
      </div>

      <button className='mt-10 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 font-semibold text-[#112662] transition hover:bg-slate-100'>
        <Download className='h-5 w-5' />
        Download ID
      </button>
    </div>
  )
}
