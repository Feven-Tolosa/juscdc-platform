import ProgramCard from './ProgramCard'
import { programs } from './data'

export default function ProgramsGrid() {
  return (
    <section className='mx-auto max-w-7xl px-6 py-24 lg:px-12'>
      <div className='mb-16 text-center'>
        <h2 className='text-4xl font-extrabold text-slate-900'>
          Featured Programs
        </h2>

        <p className='mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600'>
          Discover impactful leadership and career development opportunities
          designed for Jimma University students.
        </p>
      </div>

      <div className='grid gap-10 lg:grid-cols-2 xl:grid-cols-3'>
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </section>
  )
}
