import { RegisteredProgram } from './types'

interface RegisteredProgramsProps {
  programs: RegisteredProgram[]
}

export default function RegisteredPrograms({
  programs,
}: RegisteredProgramsProps) {
  return (
    <div className='rounded-[36px] bg-white p-8 shadow-xl'>
      <h2 className='text-3xl font-bold text-slate-900'>Registered Programs</h2>

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

              <span className='rounded-full bg-[#112662]/10 px-4 py-2 text-sm font-semibold text-[#112662]'>
                {program.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
