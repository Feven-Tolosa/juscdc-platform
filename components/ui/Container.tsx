import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <div className='max-w-7xl mx-auto px-4 md:px-8'>{children}</div>
}
