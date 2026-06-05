'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Plus, Pencil, Trash2, X, Loader2, CheckCircle } from 'lucide-react'

type ProgramStatus = 'Upcoming' | 'Ongoing' | 'Completed'

interface Program {
  id: string
  title: string
  description: string | null
  start_date: string | null
  end_date: string | null
  status: ProgramStatus
}

const STATUS_STYLES: Record<ProgramStatus, string> = {
  Upcoming: 'bg-slate-800 text-slate-300',
  Ongoing: 'bg-yellow-900 text-yellow-300',
  Completed: 'bg-green-900 text-green-300',
}

const blank = (): Omit<Program, 'id'> => ({
  title: '',
  description: '',
  start_date: '',
  end_date: '',
  status: 'Upcoming',
})

const inputClass =
  'w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none focus:border-yellow-400'

export default function ProgramsManager({
  programs: initial,
}: {
  programs: Program[]
}) {
  const [programs, setPrograms] = useState(initial)
  const [form, setForm] = useState<Omit<Program, 'id'>>(blank())
  const [editId, setEditId] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const supabase = createClient()

  const openCreate = () => {
    setForm(blank())
    setEditId(null)
    setShowForm(true)
    setError(null)
  }
  const openEdit = (p: Program) => {
    setForm({
      title: p.title,
      description: p.description ?? '',
      start_date: p.start_date ?? '',
      end_date: p.end_date ?? '',
      status: p.status,
    })
    setEditId(p.id)
    setShowForm(true)
    setError(null)
  }
  const closeForm = () => {
    setShowForm(false)
    setEditId(null)
  }

  const handleSave = async () => {
    if (!form.title.trim()) {
      setError('Title is required.')
      return
    }
    setSaving(true)
    setError(null)

    const payload = {
      title: form.title.trim(),
      description: form.description || null,
      start_date: form.start_date || null,
      end_date: form.end_date || null,
      status: form.status,
    }

    if (editId) {
      const { data, error: err } = await supabase
        .from('programs')
        .update(payload)
        .eq('id', editId)
        .select()
        .single()
      if (err) {
        setError(err.message)
        setSaving(false)
        return
      }
      setPrograms((prev) => prev.map((p) => (p.id === editId ? data : p)))
    } else {
      const { data, error: err } = await supabase
        .from('programs')
        .insert(payload)
        .select()
        .single()
      if (err) {
        setError(err.message)
        setSaving(false)
        return
      }
      setPrograms((prev) => [data, ...prev])
    }

    setSaving(false)
    closeForm()
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this program? This cannot be undone.')) return
    const { error: err } = await supabase.from('programs').delete().eq('id', id)
    if (!err) setPrograms((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <div className='space-y-6'>
      {/* Add button */}
      <button
        onClick={openCreate}
        className='flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-[#0a0f1e] transition hover:bg-yellow-300'
      >
        <Plus className='h-4 w-4' /> New Program
      </button>

      {/* Form modal */}
      {showForm && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4'>
          <div className='w-full max-w-lg rounded-2xl bg-slate-900 p-8 ring-1 ring-slate-700'>
            <div className='mb-6 flex items-center justify-between'>
              <h2 className='text-xl font-bold text-white'>
                {editId ? 'Edit Program' : 'New Program'}
              </h2>
              <button
                onClick={closeForm}
                className='text-slate-500 hover:text-white'
              >
                <X className='h-5 w-5' />
              </button>
            </div>

            <div className='space-y-4'>
              <input
                placeholder='Title *'
                value={form.title}
                onChange={(e) =>
                  setForm((f) => ({ ...f, title: e.target.value }))
                }
                className={inputClass}
              />
              <textarea
                placeholder='Description (optional)'
                value={form.description ?? ''}
                onChange={(e) =>
                  setForm((f) => ({ ...f, description: e.target.value }))
                }
                rows={3}
                className={`${inputClass} resize-none`}
              />
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='mb-1 block text-xs text-slate-500'>
                    Start Date
                  </label>
                  <input
                    type='date'
                    value={form.start_date ?? ''}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, start_date: e.target.value }))
                    }
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className='mb-1 block text-xs text-slate-500'>
                    End Date
                  </label>
                  <input
                    type='date'
                    value={form.end_date ?? ''}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, end_date: e.target.value }))
                    }
                    className={inputClass}
                  />
                </div>
              </div>
              <select
                value={form.status}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    status: e.target.value as ProgramStatus,
                  }))
                }
                className={`${inputClass} cursor-pointer`}
              >
                <option value='Upcoming'>Upcoming</option>
                <option value='Ongoing'>Ongoing</option>
                <option value='Completed'>Completed</option>
              </select>
            </div>

            {error && (
              <p className='mt-4 rounded-xl bg-red-950 px-4 py-3 text-sm text-red-400'>
                {error}
              </p>
            )}

            <div className='mt-6 flex gap-3'>
              <button
                onClick={handleSave}
                disabled={saving}
                className='flex flex-1 items-center justify-center gap-2 rounded-xl bg-yellow-400 py-3 text-sm font-bold text-[#0a0f1e] hover:bg-yellow-300 disabled:opacity-60'
              >
                {saving ? (
                  <Loader2 className='h-4 w-4 animate-spin' />
                ) : (
                  <CheckCircle className='h-4 w-4' />
                )}
                {editId ? 'Save Changes' : 'Create Program'}
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

      {/* Programs list */}
      <div className='space-y-4'>
        {programs.length === 0 ? (
          <div className='rounded-2xl bg-slate-900 py-16 text-center text-slate-500 ring-1 ring-slate-800'>
            No programs yet. Create your first one.
          </div>
        ) : (
          programs.map((p) => (
            <div
              key={p.id}
              className='flex items-center justify-between gap-4 rounded-2xl bg-slate-900 p-5 ring-1 ring-slate-800'
            >
              <div className='min-w-0'>
                <div className='flex items-center gap-3'>
                  <h3 className='font-bold text-white'>{p.title}</h3>
                  <span
                    className={`rounded-full px-3 py-0.5 text-xs font-semibold ${STATUS_STYLES[p.status]}`}
                  >
                    {p.status}
                  </span>
                </div>
                {p.description && (
                  <p className='mt-1 text-sm text-slate-400 truncate'>
                    {p.description}
                  </p>
                )}
                {(p.start_date || p.end_date) && (
                  <p className='mt-1 text-xs text-slate-500'>
                    {p.start_date ?? '?'} → {p.end_date ?? '?'}
                  </p>
                )}
              </div>
              <div className='flex shrink-0 gap-2'>
                <button
                  onClick={() => openEdit(p)}
                  className='rounded-xl bg-slate-800 p-2.5 text-slate-400 hover:bg-slate-700 hover:text-white'
                >
                  <Pencil className='h-4 w-4' />
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className='rounded-xl bg-slate-800 p-2.5 text-slate-400 hover:bg-red-950 hover:text-red-400'
                >
                  <Trash2 className='h-4 w-4' />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
