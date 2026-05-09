import { Download } from 'lucide-react'

import { Certificate } from './types'

interface CertificateVaultProps {
  certificates: Certificate[]
}

export default function CertificateVault({
  certificates,
}: CertificateVaultProps) {
  return (
    <div className='rounded-[36px] bg-white p-8 shadow-xl'>
      <h2 className='text-3xl font-bold text-slate-900'>Certificate Vault</h2>

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

            <a
              href={certificate.fileUrl}
              download
              className='flex items-center justify-center gap-3 rounded-2xl bg-[#1e3a8a] px-5 py-4 font-semibold text-white transition hover:bg-[#172554]'
            >
              <Download className='h-5 w-5' />
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
