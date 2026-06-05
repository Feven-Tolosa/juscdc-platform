'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Send, Trash2, X, Loader2, Globe, User } from 'lucide-react'

interface Member {
  id: string
  full_name: string
  student_id: string
}
interface Notification {
  id: string
  title: string
  message: string
  user_id: string | null
  is_read: boolean
  created_at: string
  profiles: { full_name: string } | null
}

const inputClass =
  'w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none focus:border-yellow-400'

export default function NotificationsManager({
  notifications: initial,
  members,
}: {
  notifications: Notification[]
  members: Member[]
}) {
  const [notifications, setNotifications] = useState(initial)
  const [showForm, setShowForm] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({
    target: 'all' as 'all' | 'individual',
    user_id: '',
    title: '',
    message: '',
  })
  const supabase = createClient()

  const closeForm = () => {
    setShowForm(false)
    setError(null)
  }

  const handleSend = async () => {
    if (!form.title.trim()) {
      setError('Title is required.')
      return
    }
    if (!form.message.trim()) {
      setError('Message is required.')
      return
    }
    if (form.target === 'individual' && !form.user_id) {
      setError('Please select a member.')
      return
    }
    setSending(true)
    setError(null)

    const payload = {
      title: form.title.trim(),
      message: form.message.trim(),
      user_id: form.target === 'all' ? null : form.user_id,
    }

    const { data, error: err } = await supabase
      .from('notifications')
      .insert(payload)
      .select('*, profiles(full_name)')
      .single()

    if (err) {
      setError(err.message)
      setSending(false)
      return
    }
    setNotifications((prev) => [data, ...prev])
    setSending(false)
    setForm({ target: 'all', user_id: '', title: '', message: '' })
    closeForm()
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this notification?')) return
    const { error: err } = await supabase
      .from('notifications')
      .delete()
      .eq('id', id)
    if (!err) setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  return (
    <div className='space-y-6'>
      <button
        onClick={() => setShowForm(true)}
        className='flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-[#0a0f1e] hover:bg-yellow-300'
      >
        <Send className='h-4 w-4' /> Send Notification
      </button>

      {/* Form modal */}
      {showForm && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4'>
          <div className='w-full max-w-lg rounded-2xl bg-slate-900 p-8 ring-1 ring-slate-700'>
            <div className='mb-6 flex items-center justify-between'>
              <h2 className='text-xl font-bold text-white'>
                Send Notification
              </h2>
              <button
                onClick={closeForm}
                className='text-slate-500 hover:text-white'
              >
                <X className='h-5 w-5' />
              </button>
            </div>

            <div className='space-y-4'>
              {/* Target toggle */}
              <div className='flex gap-3'>
                {(['all', 'individual'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() =>
                      setForm((f) => ({ ...f, target: t, user_id: '' }))
                    }
                    className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition ${
                      form.target === t
                        ? 'bg-yellow-400 text-[#0a0f1e]'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {t === 'all' ? (
                      <Globe className='h-4 w-4' />
                    ) : (
                      <User className='h-4 w-4' />
                    )}
                    {t === 'all' ? 'All Members' : 'Individual'}
                  </button>
                ))}
              </div>

              {form.target === 'individual' && (
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
              )}

              <input
                placeholder='Notification Title *'
                value={form.title}
                onChange={(e) =>
                  setForm((f) => ({ ...f, title: e.target.value }))
                }
                className={inputClass}
              />

              <textarea
                placeholder='Message *'
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                rows={4}
                className={`${inputClass} resize-none`}
              />
            </div>

            {error && (
              <p className='mt-4 rounded-xl bg-red-950 px-4 py-3 text-sm text-red-400'>
                {error}
              </p>
            )}

            <div className='mt-6 flex gap-3'>
              <button
                onClick={handleSend}
                disabled={sending}
                className='flex flex-1 items-center justify-center gap-2 rounded-xl bg-yellow-400 py-3 text-sm font-bold text-[#0a0f1e] hover:bg-yellow-300 disabled:opacity-60'
              >
                {sending ? (
                  <Loader2 className='h-4 w-4 animate-spin' />
                ) : (
                  <Send className='h-4 w-4' />
                )}
                Send
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

      {/* Notifications list */}
      <div className='space-y-4'>
        {notifications.length === 0 ? (
          <div className='rounded-2xl bg-slate-900 py-16 text-center text-slate-500 ring-1 ring-slate-800'>
            No notifications sent yet.
          </div>
        ) : (
          notifications.map((n) => (
            <div
              key={n.id}
              className='flex items-start justify-between gap-4 rounded-2xl bg-slate-900 p-5 ring-1 ring-slate-800'
            >
              <div className='min-w-0'>
                <div className='flex items-center gap-3'>
                  <p className='font-bold text-white'>{n.title}</p>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      n.user_id
                        ? 'bg-blue-900 text-blue-300'
                        : 'bg-yellow-900 text-yellow-300'
                    }`}
                  >
                    {n.user_id
                      ? (n.profiles?.full_name ?? 'Individual')
                      : 'All Members'}
                  </span>
                </div>
                <p className='mt-1 text-sm text-slate-400'>{n.message}</p>
                <p className='mt-2 text-xs text-slate-500'>
                  {new Date(n.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
              <button
                onClick={() => handleDelete(n.id)}
                className='shrink-0 rounded-xl bg-slate-800 p-2.5 text-slate-400 hover:bg-red-950 hover:text-red-400'
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
