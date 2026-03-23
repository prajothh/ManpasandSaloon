import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/60 disabled:pointer-events-none disabled:opacity-50',
        size === 'sm' && 'h-9 px-4 text-sm',
        size === 'md' && 'h-11 px-5 text-sm sm:text-base',
        size === 'lg' && 'h-12 px-6 text-base',
        variant === 'primary' &&
          'bg-gold-500 text-black hover:bg-gold-400 shadow-glow',
        variant === 'secondary' &&
          'bg-white/5 text-gold-100 border border-white/10 hover:bg-white/10',
        variant === 'ghost' &&
          'bg-transparent text-white/90 hover:bg-white/5 border border-transparent hover:border-white/10',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

