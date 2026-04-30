import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export default function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'px-6 py-3 rounded-xl font-medium transition-all',
        variant === 'primary' &&
          'bg-[var(--primary)] text-white hover:opacity-90',
        variant === 'secondary' && 'bg-[var(--secondary)] text-black',
        className,
      )}
      {...props}
    />
  )
}
