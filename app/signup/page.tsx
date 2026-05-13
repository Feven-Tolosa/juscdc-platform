import { signup } from '@/actions/auth'

export default function SignupPage() {
  return (
    <main className='flex min-h-screen items-center justify-center bg-[#f8fafc] px-6 py-32'>
      <div className='w-full max-w-xl rounded-[40px] bg-white p-10 shadow-2xl'>
        <h1 className='text-4xl font-extrabold text-slate-900'>
          Create Account
        </h1>

        <p className='mt-3 text-slate-500'>
          Join the JUSCDC membership platform.
        </p>

        <form action={signup} className='mt-10 space-y-5'>
          <input
            name='fullName'
            required
            placeholder='Full Name'
            className='w-full rounded-2xl border text-slate-500 focus:text-slate-800 border-slate-300 px-5 py-4 outline-none focus:border-[#1e3a8a]'
          />

          <input
            name='studentId'
            required
            placeholder='Student ID'
            className='w-full rounded-2xl text-slate-500 focus:text-slate-800  border border-slate-300 px-5 py-4 outline-none focus:border-[#1e3a8a]'
          />

          <input
            name='campus'
            required
            placeholder='Campus'
            className='w-full rounded-2xl text-slate-500  border border-slate-300 px-5 py-4 outline-none focus:border-[#1e3a8a]'
          />

          <input
            name='department'
            required
            placeholder='Department'
            className='w-full rounded-2xl text-slate-500  border border-slate-300 px-5 py-4 outline-none focus:border-[#1e3a8a]'
          />

          <input
            name='email'
            type='email'
            required
            placeholder='Email'
            className='w-full rounded-2xl text-slate-500  border border-slate-300 px-5 py-4 outline-none focus:border-[#1e3a8a]'
          />

          <input
            name='password'
            type='password'
            required
            placeholder='Password'
            className='w-full rounded-2xl text-slate-500  border border-slate-300 px-5 py-4 outline-none focus:border-[#1e3a8a]'
          />

          <button className='w-full rounded-2xl bg-[#1e3a8a] px-5 py-4 font-semibold text-white transition hover:bg-[#172554]'>
            Create Account
          </button>
        </form>
      </div>
    </main>
  )
}
