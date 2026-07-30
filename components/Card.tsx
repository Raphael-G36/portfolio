import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`border border-paper-rule bg-paper-raised p-6 md:p-8 ${
        hover ? 'transition-colors duration-200 hover:border-accent/40' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
