import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { site } from '@/data/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-paper-rule bg-paper">
      <div className="container-custom flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-ink">{site.name}</p>
          <p className="mt-1 text-sm text-ink-muted">
            {site.role} · Based in {site.location}
          </p>
          <p className="mt-2 text-sm text-accent">{site.availability}</p>
          <p className="mt-4 font-mono text-xs text-ink-faint">© {currentYear}</p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-ink-muted">
          <Link href="/#work" className="hover:text-accent">
            Work
          </Link>
          <Link href="/#contact" className="hover:text-accent">
            Contact
          </Link>
          <a href={site.resumePath} download className="hover:text-accent">
            Resume
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-accent"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-accent"
            aria-label="GitHub"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
