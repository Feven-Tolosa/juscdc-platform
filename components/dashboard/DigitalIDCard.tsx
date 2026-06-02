'use client'

import { useState } from 'react'
import { Download, BadgeCheck, Loader2 } from 'lucide-react'
import { DashboardUser } from './types'

interface DigitalIDCardProps {
  user: DashboardUser
}

export default function DigitalIDCard({ user }: DigitalIDCardProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = async () => {
    setIsGenerating(true)
    try {
      // Dynamic import so jsPDF is only loaded client-side
      const { default: jsPDF } = await import('jspdf')

      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [85.6, 54], // Standard ID card dimensions (credit card size)
      })

      const W = 85.6
      const H = 54

      // ── Background ────────────────────────────────────────────
      // Navy gradient approximated with a solid fill + overlay
      doc.setFillColor(17, 38, 98) // #112662
      doc.rect(0, 0, W, H, 'F')

      // Top accent strip
      doc.setFillColor(234, 179, 8) // Gold #eab308
      doc.rect(0, 0, W, 4, 'F')

      // ── Header ────────────────────────────────────────────────
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(7)
      doc.setFont('helvetica', 'normal')
      doc.text('JIMMA UNIVERSITY', 5, 11)

      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.text('JUSCDC', 5, 18)

      doc.setFontSize(7)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(180, 195, 230)
      doc.text('Career Development Club', 5, 23)

      // Divider line
      doc.setDrawColor(234, 179, 8)
      doc.setLineWidth(0.3)
      doc.line(5, 26, W - 5, 26)

      // ── Member info ───────────────────────────────────────────
      doc.setTextColor(180, 195, 230)
      doc.setFontSize(6)
      doc.setFont('helvetica', 'normal')
      doc.text('FULL NAME', 5, 32)

      doc.setTextColor(255, 255, 255)
      doc.setFontSize(10)
      doc.setFont('helvetica', 'bold')
      doc.text(user.fullName.toUpperCase(), 5, 38)

      // Two columns: Student ID | Campus
      doc.setTextColor(180, 195, 230)
      doc.setFontSize(6)
      doc.setFont('helvetica', 'normal')
      doc.text('STUDENT ID', 5, 44)
      doc.text('CAMPUS', 45, 44)

      doc.setTextColor(255, 255, 255)
      doc.setFontSize(8)
      doc.setFont('helvetica', 'bold')
      doc.text(user.studentId, 5, 49)
      doc.text(user.campus, 45, 49)

      // Department (bottom right, smaller)
      doc.setTextColor(234, 179, 8)
      doc.setFontSize(6)
      doc.setFont('helvetica', 'normal')
      const dept =
        user.department.length > 28
          ? user.department.slice(0, 28) + '…'
          : user.department
      doc.text(dept, W - 5, H - 4, { align: 'right' })

      // Bottom border
      doc.setFillColor(234, 179, 8)
      doc.rect(0, H - 1.5, W, 1.5, 'F')

      // ── Save ──────────────────────────────────────────────────
      doc.save(`JUSCDC-ID-${user.studentId}.pdf`)
    } catch (error) {
      console.error('Failed to generate ID card:', error)
      alert('Could not generate ID card. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className='overflow-hidden rounded-[36px] bg-linear-to-br from-[#112662] to-[#0f172a] p-8 text-white shadow-2xl'>
      <div className='flex items-start justify-between'>
        <div>
          <p className='text-sm text-slate-300'>Jimma University</p>
          <h2 className='mt-2 text-3xl font-extrabold'>JUSCDC ID</h2>
        </div>
        <BadgeCheck className='h-10 w-10 text-yellow-400' />
      </div>

      <div className='mt-14 space-y-4'>
        <div>
          <p className='text-sm text-slate-300'>Full Name</p>
          <h3 className='mt-1 text-2xl font-bold'>{user.fullName}</h3>
        </div>
        <div>
          <p className='text-sm text-slate-300'>Student ID</p>
          <h3 className='mt-1 text-xl font-semibold'>{user.studentId}</h3>
        </div>
        <div>
          <p className='text-sm text-slate-300'>Department</p>
          <h3 className='mt-1 text-xl font-semibold'>{user.department}</h3>
        </div>
      </div>

      <button
        onClick={handleDownload}
        disabled={isGenerating}
        className='mt-10 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 font-semibold text-[#112662] transition hover:bg-slate-100 disabled:opacity-60'
      >
        {isGenerating ? (
          <>
            <Loader2 className='h-5 w-5 animate-spin' />
            Generating…
          </>
        ) : (
          <>
            <Download className='h-5 w-5' />
            Download ID Card
          </>
        )}
      </button>
    </div>
  )
}
