'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Plus, Trash2, X, Loader2, FileBadge } from 'lucide-react'

interface Member {
  id: string
  full_name: string
  student_id: string
}
interface Program {
  id: string
  title: string
}
interface Certificate {
  id: string
  title: string
  issue_date: string
  user_id: string
  program_id: string | null
  members: { full_name: string; student_id: string } | null
  programs: { title: string } | null
}

const inputClass =
  'w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none focus:border-yellow-400'

export default function CertificatesManager({
  certificates: initial,
  members,
  programs,
}: {
  certificates: Certificate[]
  members: Member[]
  programs: Program[]
}) {
  const [certs, setCerts] = useState(initial)
  const [showForm, setShowForm] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({
    user_id: '',
    program_id: '',
    title: '',
    issue_date: new Date().toISOString().split('T')[0],
  })
  const supabase = createClient()

  const openForm = () => {
    setShowForm(true)
    setError(null)
  }
  const closeForm = () => {
    setShowForm(false)
    setError(null)
  }

  const handleIssue = async () => {
    if (!form.user_id) {
      setError('Please select a member.')
      return
    }
    if (!form.title.trim()) {
      setError('Certificate title is required.')
      return
    }
    setSaving(true)
    setError(null)

    const { data, error: err } = await supabase
      .from('certificates')
      .insert({
        user_id: form.user_id,
        program_id: form.program_id || null,
        title: form.title.trim(),
        issue_date: form.issue_date,
      })
      .select('*, members(full_name, student_id), programs(title)')
      .single()

    if (err) {
      setError(err.message)
      setSaving(false)
      return
    }
    setCerts((prev) => [data, ...prev])
    setSaving(false)
    closeForm()
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Revoke this certificate?')) return
    const { error: err } = await supabase
      .from('certificates')
      .delete()
      .eq('id', id)
    if (!err) setCerts((prev) => prev.filter((c) => c.id !== id))
  }

  // Auto-fill title when program is selected
  const handleProgramChange = (programId: string) => {
    const program = programs.find((p) => p.id === programId)
    setForm((f) => ({
      ...f,
      program_id: programId,
      title: program ? `${program.title} Certificate` : f.title,
    }))
  }

  return (
    <div className='space-y-6'>
      <button
        onClick={openForm}
        className='flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-[#0a0f1e] hover:bg-yellow-300'
      >
        <Plus className='h-4 w-4' /> Issue Certificate
      </button>

      {/* Form modal */}
      {showForm && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4'>
          <div className='w-full max-w-lg rounded-2xl bg-slate-900 p-8 ring-1 ring-slate-700'>
            <div className='mb-6 flex items-center justify-between'>
              <h2 className='text-xl font-bold text-white'>
                Issue Certificate
              </h2>
              <button
                onClick={closeForm}
                className='text-slate-500 hover:text-white'
              >
                <X className='h-5 w-5' />
              </button>
            </div>

            <div className='space-y-4'>
              <select
                value={form.user_id}
                onChange={(e) =>
                  setForm((f) => ({ ...f, user_id: e.target.value }))
                }
                className={`${inputClass} cursor-pointer`}
              >
                <option value=''>Select Member *</option>
                {members.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.full_name} ({m.student_id})
                  </option>
                ))}
              </select>

              <select
                value={form.program_id}
                onChange={(e) => handleProgramChange(e.target.value)}
                className={`${inputClass} cursor-pointer`}
              >
                <option value=''>Link to Program (optional)</option>
                {programs.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.title}
                  </option>
                ))}
              </select>

              <input
                placeholder='Certificate Title *'
                value={form.title}
                onChange={(e) =>
                  setForm((f) => ({ ...f, title: e.target.value }))
                }
                className={inputClass}
              />

              <div>
                <label className='mb-1 block text-xs text-slate-500'>
                  Issue Date
                </label>
                <input
                  type='date'
                  value={form.issue_date}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, issue_date: e.target.value }))
                  }
                  className={inputClass}
                />
              </div>
            </div>

            {error && (
              <p className='mt-4 rounded-xl bg-red-950 px-4 py-3 text-sm text-red-400'>
                {error}
              </p>
            )}

            <div className='mt-6 flex gap-3'>
              <button
                onClick={handleIssue}
                disabled={saving}
                className='flex flex-1 items-center justify-center gap-2 rounded-xl bg-yellow-400 py-3 text-sm font-bold text-[#0a0f1e] hover:bg-yellow-300 disabled:opacity-60'
              >
                {saving ? (
                  <Loader2 className='h-4 w-4 animate-spin' />
                ) : (
                  <FileBadge className='h-4 w-4' />
                )}
                Issue Certificate
              </button>
              <button
                onClick={closeForm}
                className='rounded-xl bg-slate-800 px-5 py-3 text-sm text-slate-400 hover:bg-slate-700'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Certificates list */}
      <div className='space-y-4'>
        {certs.length === 0 ? (
          <div className='rounded-2xl bg-slate-900 py-16 text-center text-slate-500 ring-1 ring-slate-800'>
            No certificates issued yet.
          </div>
        ) : (
          certs.map((c) => (
            <div
              key={c.id}
              className='flex items-center justify-between gap-4 rounded-2xl bg-slate-900 p-5 ring-1 ring-slate-800'
            >
              <div>
                <p className='font-bold text-white'>{c.title}</p>
                <p className='mt-0.5 text-sm text-slate-400'>
                  {c.members?.full_name ?? '—'} · {c.members?.student_id ?? '—'}
                </p>
                {c.programs && (
                  <p className='mt-0.5 text-xs text-slate-500'>
                    {c.programs.title}
                  </p>
                )}
                <p className='mt-1 text-xs text-slate-500'>
                  Issued:{' '}
                  {new Date(c.issue_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <button
                onClick={() => handleDelete(c.id)}
                className='rounded-xl bg-slate-800 p-2.5 text-slate-400 hover:bg-red-950 hover:text-red-400'
              >
                <Trash2 className='h-4 w-4' />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
