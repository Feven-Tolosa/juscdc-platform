import Image from 'next/image'

import { DashboardUser } from './types'

interface ProfileCardProps {
  user: DashboardUser
}

export default function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className='rounded-[36px] bg-white p-8 shadow-xl'>
      <div className='flex flex-col items-center text-center'>
        <div className='relative h-32 w-32 overflow-hidden rounded-full'>
          <Image
            src={user.image}
            alt={user.fullName}
            fill
            className='object-cover'
          />
        </div>

        <h2 className='mt-6 text-3xl font-bold text-slate-900'>
          {user.fullName}
        </h2>

        <p className='mt-2 text-[#112662]'>{user.department}</p>

        <div className='mt-8 w-full space-y-4'>
          <div className='rounded-2xl bg-slate-50 p-4'>
            <p className='text-sm text-slate-500'>Student ID</p>

            <p className='mt-1 font-semibold text-slate-900'>
              {user.studentId}
            </p>
          </div>

          <div className='rounded-2xl bg-slate-50 p-4'>
            <p className='text-sm text-slate-500'>Campus</p>

            <p className='mt-1 font-semibold text-slate-900'>{user.campus}</p>
          </div>

          <div className='rounded-2xl bg-slate-50 p-4'>
            <p className='text-sm text-slate-500'>Email</p>

            <p className='mt-1 font-semibold text-slate-900'>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
