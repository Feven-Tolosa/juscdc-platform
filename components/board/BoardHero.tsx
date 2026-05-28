export default function BoardHero() {
  return (
    <section className='relative overflow-hidden bg-linear-to-br from-[#0f172a] via-[#112662] to-[#0f172a] px-6 py-32 text-white'>
      <div className='mx-auto max-w-5xl text-center'>
        <div className='mb-5 inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-2 text-sm font-medium text-yellow-300'>
          Leadership & Team
        </div>

        <h1 className='text-5xl font-extrabold md:text-7xl'>
          Meet The{' '}
          <span className='bg-linear-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent'>
            JUSCDC Board
          </span>
        </h1>

        <p className='mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300'>
          Meet the passionate student leaders driving innovation, leadership,
          and career development.
        </p>
      </div>
    </section>
  )
}
