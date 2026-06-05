'use client'

import { useState } from 'react'
import { Search, CheckCircle, XCircle } from 'lucide-react'

const CAMPUS_COLORS: Record<string, string> = {
  'Main Campus': 'bg-blue-900 text-blue-300',
  BECO: 'bg-purple-900 text-purple-300',
  JiT: 'bg-green-900 text-green-300',
  AGRI: 'bg-orange-900 text-orange-300',
}

interface Member {
  id: string
  full_name: string
  student_id: string
  email: string
  campus: string
  department: string
  joined_at: string
  is_active: boolean
}

export default function MembersTable({ members }: { members: Member[] }) {
  const [search, setSearch] = useState('')
  const [campus, setCampus] = useState('All')

  const campuses = ['All', ...Array.from(new Set(members.map((m) => m.campus)))]

  const filtered = members.filter((m) => {
    const q = search.toLowerCase()
    const matchesSearch =
      m.full_name.toLowerCase().includes(q) ||
      m.student_id.toLowerCase().includes(q) ||
      m.email.toLowerCase().includes(q) ||
      m.department.toLowerCase().includes(q)
    const matchesCampus = campus === 'All' || m.campus === campus
    return matchesSearch && matchesCampus
  })

  return (
    <div className='space-y-5'>
      {/* Filters */}
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
        <div className='relative flex-1'>
          <Search className='absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500' />
          <input
            type='text'
            placeholder='Search by name, ID, email…'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-11 pr-4 text-sm text-slate-200 placeholder-slate-500 outline-none focus:border-yellow-400'
          />
        </div>

        <div className='flex gap-2 flex-wrap'>
          {campuses.map((c) => (
            <button
              key={c}
              onClick={() => setCampus(c)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                campus === c
                  ? 'bg-yellow-400 text-[#0a0f1e]'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className='overflow-hidden rounded-2xl ring-1 ring-slate-800'>
        <div className='overflow-x-auto'>
          <table className='w-full text-left text-sm'>
            <thead>
              <tr className='border-b border-slate-800 bg-slate-900 text-xs font-semibold uppercase tracking-wider text-slate-500'>
                <th className='px-5 py-4'>Name</th>
                <th className='px-5 py-4'>Student ID</th>
                <th className='px-5 py-4'>Email</th>
                <th className='px-5 py-4'>Campus</th>
                <th className='px-5 py-4'>Department</th>
                <th className='px-5 py-4'>Joined</th>
                <th className='px-5 py-4'>Status</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-800 bg-[#0d1424]'>
              {filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className='px-5 py-16 text-center text-slate-500'
                  >
                    No members found.
                  </td>
                </tr>
              ) : (
                filtered.map((m) => (
                  <tr key={m.id} className='transition hover:bg-slate-800/50'>
                    <td className='px-5 py-4 font-semibold text-white'>
                      {m.full_name}
                    </td>
                    <td className='px-5 py-4 font-mono text-slate-400'>
                      {m.student_id}
                    </td>
                    <td className='px-5 py-4 text-slate-400'>{m.email}</td>
                    <td className='px-5 py-4'>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          CAMPUS_COLORS[m.campus] ??
                          'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {m.campus}
                      </span>
                    </td>
                    <td className='px-5 py-4 text-slate-400'>{m.department}</td>
                    <td className='px-5 py-4 text-slate-500'>
                      {new Date(m.joined_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </td>
                    <td className='px-5 py-4'>
                      {m.is_active ? (
                        <span className='flex items-center gap-1.5 text-green-400 text-xs font-medium'>
                          <CheckCircle className='h-3.5 w-3.5' /> Active
                        </span>
                      ) : (
                        <span className='flex items-center gap-1.5 text-slate-500 text-xs font-medium'>
                          <XCircle className='h-3.5 w-3.5' /> Inactive
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className='border-t border-slate-800 bg-slate-900 px-5 py-3 text-xs text-slate-500'>
          Showing {filtered.length} of {members.length} members
        </div>
      </div>
    </div>
  )
}
