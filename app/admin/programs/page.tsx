import { createClient } from '@/lib/supabase/server'
import ProgramsManager from '@/components/admin/ProgramsManager'

export default async function AdminProgramsPage() {
  const supabase = await createClient()

  const { data: programs } = await supabase
    .from('programs')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl font-extrabold text-white'>Programs</h1>
        <p className='mt-2 text-slate-400'>
          Create and manage JUSCDC programs.
        </p>
      </div>

      <ProgramsManager programs={programs ?? []} />
    </div>
  )
}
