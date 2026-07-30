'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { site } from '@/data/site'

const navLinks = [
  { href: '/#work', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || isOpen
          ? 'border-b border-paper-rule bg-paper/95 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom flex h-16 items-center justify-between md:h-18">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-ink hover:text-accent"
          aria-label={`${site.name} — Home`}
        >
          {site.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-muted hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={site.resumePath}
            download
            className="font-mono text-xs uppercase tracking-[0.12em] text-accent hover:text-accent-hover"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center border border-paper-rule px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-paper-rule bg-paper md:hidden">
          <div className="container-custom flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-base text-ink hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="py-3 text-base text-ink hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={site.resumePath}
              download
              onClick={() => setIsOpen(false)}
              className="py-3 font-mono text-xs uppercase tracking-[0.12em] text-accent"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
