import { GraduationCap } from 'lucide-react'
import { RegisteredProgram } from './types'

interface RegisteredProgramsProps {
  programs: RegisteredProgram[]
}

const statusStyles: Record<RegisteredProgram['status'], string> = {
  Completed: 'bg-green-100 text-green-700',
  Ongoing: 'bg-yellow-100 text-yellow-700',
  Upcoming: 'bg-slate-100 text-slate-600',
}

export default function RegisteredPrograms({
  programs,
}: RegisteredProgramsProps) {
  return (
    <div className='rounded-[36px] bg-white p-8 shadow-xl'>
      <h2 className='text-3xl font-bold text-slate-900'>Registered Programs</h2>

      {programs.length === 0 ? (
        <div className='mt-10 flex flex-col items-center gap-3 py-10 text-slate-400'>
          <GraduationCap className='h-12 w-12 opacity-40' />
          <p className='text-lg font-medium'>No programs yet</p>
          <p className='text-sm'>
            Browse our programs and register to get started.
          </p>
        </div>
      ) : (
        <div className='mt-8 space-y-5'>
          {programs.map((program) => (
            <div
              key={program.id}
              className='rounded-2xl border border-slate-200 p-5'
            >
              <div className='flex items-center justify-between'>
                <div>
                  <h3 className='text-xl font-bold text-slate-900'>
                    {program.title}
                  </h3>
                  <p className='mt-1 text-slate-500'>{program.date}</p>
                </div>
                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    statusStyles[program.status]
                  }`}
                >
                  {program.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
