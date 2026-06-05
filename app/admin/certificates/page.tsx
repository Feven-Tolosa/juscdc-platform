import { createClient } from '@/lib/supabase/server'
import CertificatesManager from '@/components/admin/CertificatesManager'

export default async function AdminCertificatesPage() {
  const supabase = await createClient()

  const [{ data: certificates }, { data: members }, { data: programs }] =
    await Promise.all([
      supabase
        .from('certificates')
        .select('*, members(full_name, student_id), programs(title)')
        .order('created_at', { ascending: false }),
      supabase
        .from('members')
        .select('id, full_name, student_id')
        .order('full_name'),
      supabase
        .from('programs')
        .select('id, title')
        .eq('status', 'Completed')
        .order('title'),
    ])

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl font-extrabold text-white'>Certificates</h1>
        <p className='mt-2 text-slate-400'>
          Issue and manage member certificates.
        </p>
      </div>

      <CertificatesManager
        certificates={certificates ?? []}
        members={members ?? []}
        programs={programs ?? []}
      />
    </div>
  )
}
