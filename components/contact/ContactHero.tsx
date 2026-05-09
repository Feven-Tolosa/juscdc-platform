export default function ContactHero() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] px-6 py-32 text-white'>
      <div className='absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl' />

      <div className='absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl' />

      <div className='relative mx-auto max-w-5xl text-center'>
        <div className='mb-5 inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-2 text-sm font-medium text-yellow-300'>
          Contact Us
        </div>

        <h1 className='text-5xl font-extrabold md:text-7xl'>
          Let’s Start a{' '}
          <span className='bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent'>
            Conversation
          </span>
        </h1>

        <p className='mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300'>
          Reach out for partnerships, questions, opportunities, or
          collaborations with JUSCDC.
        </p>
      </div>
    </section>
  )
}
