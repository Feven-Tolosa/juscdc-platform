import { Bell } from 'lucide-react'

export default function DashboardHeader() {
  return (
    <header className='flex h-24 items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-10'>
      <div>
        <h1 className='text-3xl font-extrabold text-slate-900'>
          Membership Dashboard
        </h1>

        <p className='mt-1 text-slate-500'>Welcome back to JUSCDC</p>
      </div>

      <button className='relative rounded-2xl bg-slate-100 p-4 transition hover:bg-slate-200'>
        <Bell className='h-6 w-6 text-slate-700' />

        <span className='absolute right-3 top-3 h-3 w-3 rounded-full bg-red-500' />
      </button>
    </header>
  )
}
