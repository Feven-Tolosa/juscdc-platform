import { Download, FileX } from 'lucide-react'
import { Certificate } from '../type'

interface CertificateVaultProps {
  certificates: Certificate[]
}

export default function CertificateVault({
  certificates,
}: CertificateVaultProps) {
  return (
    <div className='rounded-[36px] bg-white p-8 shadow-xl'>
      <h2 className='text-3xl font-bold text-slate-900'>Certificate Vault</h2>

      {certificates.length === 0 ? (
        <div className='mt-10 flex flex-col items-center justify-center gap-3 py-10 text-center text-slate-400'>
          <FileX className='h-12 w-12 opacity-40' />
          <p className='text-lg font-medium'>No certificates yet</p>
          <p className='text-sm'>
            Complete a program to earn your first certificate.
          </p>
        </div>
      ) : (
        <div className='mt-8 space-y-5'>
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className='flex flex-col gap-5 rounded-2xl border border-slate-200 p-5 lg:flex-row lg:items-center lg:justify-between'
            >
              <div>
                <h3 className='text-xl font-bold text-slate-900'>
                  {certificate.title}
                </h3>
                <p className='mt-1 text-slate-500'>
                  Issued: {certificate.issueDate}
                </p>
              </div>

              {certificate.fileUrl ? (
                <a
                  href={certificate.fileUrl}
                  download
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center justify-center gap-3 rounded-2xl bg-[#112662] px-5 py-4 font-semibold text-white transition hover:bg-[#172554]'
                >
                  <Download className='h-5 w-5' />
                  Download
                </a>
              ) : (
                <span className='flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-5 py-4 text-sm font-medium text-slate-400'>
                  File not available
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
