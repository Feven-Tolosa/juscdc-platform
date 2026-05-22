import ProfileForm from '@/components/profile/ProfileForm'

export default function ProfilePage() {
  return (
    <main className='min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-slate-100 px-6 py-24'>
      <div className='mx-auto max-w-5xl'>
        <div className='mb-12 text-center'>
          <div className='inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#1e3a8a]'>
            JUSCDC Account
          </div>

          <h1 className='mt-5 text-5xl font-black tracking-tight text-slate-900'>
            Profile Settings
          </h1>

          <p className='mx-auto mt-4 max-w-2xl text-lg text-slate-500'>
            Customize your public profile, update your information, and manage
            your account settings.
          </p>
        </div>

        <ProfileForm />
      </div>
    </main>
  )
}
