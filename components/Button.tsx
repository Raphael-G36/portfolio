import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  target?: string
  rel?: string
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-ghost bg-ink text-paper-raised border-ink hover:bg-ink/90 hover:text-paper-raised hover:border-ink',
    outline: 'btn-ghost',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-3 text-base',
    lg: 'px-6 py-3.5 text-base',
  }

  const classes = `${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    const isExternal = href.startsWith('http://') || href.startsWith('https://')

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target={target || '_blank'}
          rel={rel || 'noopener noreferrer'}
        >
          {children}
        </a>
      )
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
