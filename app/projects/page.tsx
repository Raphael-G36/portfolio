import type { Metadata } from 'next'
import Projects from '@/components/sections/Projects'

export const metadata: Metadata = {
  title: 'Projects & Case Studies',
  description:
    'Selected full-stack projects by Raphael Okonmah: Delta Journal of Clinical Practice (live journal website), Learning Management System with Paystack, and School Management Software with role-based access. Case studies covering PHP, CodeIgniter, Python, Flask, MySQL, and production deployments.',
  keywords: [
    'Raphael Okonmah projects',
    'full stack case studies',
    'Delta Journal of Clinical Practice',
    'djcp.org',
    'Learning Management System Flask',
    'school management software CodeIgniter',
    'Paystack integration',
    'portfolio projects Nigeria',
    'web application case studies',
  ],
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects & Case Studies | Raphael Okonmah',
    description:
      'Journal publishing, LMS, and school management systems — full-stack products shipped for real organizations.',
    url: '/projects',
  },
}

export default function ProjectsPage() {
  return (
    <div className="pt-16 md:pt-18">
      <Projects />
    </div>
  )
}
