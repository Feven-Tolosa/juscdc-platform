import { login } from '@/actions/auth'

export default function LoginPage() {
  return (
    <main className='flex min-h-screen items-center justify-center bg-[#f8fafc] px-6 py-32'>
      <div className='w-full max-w-md rounded-[40px] bg-white p-10 shadow-2xl'>
        <h1 className='text-4xl font-extrabold text-slate-900'>Welcome Back</h1>

        <p className='mt-3 text-slate-500'>
          Login to your membership dashboard.
        </p>

        <form action={login} className='mt-10 space-y-5'>
          <input
            name='email'
            type='email'
            required
            placeholder='Email'
            className='w-full rounded-2xl border border-slate-300 text-slate-500 focus:text-slate-800 px-5 py-4 outline-none focus:border-[#1e3a8a]'
          />

          <input
            name='password'
            type='password'
            required
            placeholder='Password'
            className='w-full rounded-2xl border border-slate-300  text-slate-500 focus:text-slate-800 px-5 py-4 outline-none focus:border-[#1e3a8a]'
          />

          <button className='w-full rounded-2xl bg-[#1e3a8a] px-5 py-4 font-semibold text-white transition hover:bg-[#172554]'>
            Login
          </button>
        </form>
      </div>
    </main>
  )
}
