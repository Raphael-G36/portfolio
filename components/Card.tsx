import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 ${
        hover
          ? 'transition-all duration-300 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

