import Link from 'next/link'
import Button from '@/components/Button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center bg-paper">
      <div className="container-custom py-32">
        <p className="label-mono mb-4 text-accent">404</p>
        <h1 className="heading-secondary mb-4">Page not found</h1>
        <p className="text-body mb-8 max-w-measure">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Button href="/" size="lg">
          Back home
        </Button>
      </div>
    </div>
  )
}
