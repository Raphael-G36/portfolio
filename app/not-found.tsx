import Link from 'next/link'
import Button from '@/components/Button'
import { HiHome } from 'react-icons/hi'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="container-custom text-center">
        <h1 className="heading-primary mb-4">404</h1>
        <p className="text-body text-xl mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Button href="/" size="lg">
          <HiHome className="mr-2 w-5 h-5" />
          Go Home
        </Button>
      </div>
    </div>
  )
}

