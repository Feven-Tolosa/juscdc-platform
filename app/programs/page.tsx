import ProgramCard from '@/components/programs/ProgramCard'

export default function ProgramsPage() {
  return (
    <div className='py-20 px-6 max-w-7xl mx-auto'>
      <h1 className='text-3xl font-bold mb-10'>Programs</h1>

      <div className='grid md:grid-cols-3 gap-6'>
        <ProgramCard title='Leadership Training' />
        <ProgramCard title='JU-LEAP' />
      </div>
    </div>
  )
}
