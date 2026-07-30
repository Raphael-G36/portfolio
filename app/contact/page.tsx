import type { Metadata } from 'next'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Raphael Okonmah — Full Stack Product Engineer open to full-stack roles, remote or hybrid work, freelance product development, and technical collaborations. Email, LinkedIn, and resume download available.',
  keywords: [
    'contact Raphael Okonmah',
    'hire Raphael Okonmah',
    'hire full stack developer Nigeria',
    'remote full stack developer contact',
    'freelance web developer Asaba',
    'software engineer open to work',
    'raphaelokonmah3@gmail.com',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Raphael Okonmah | Hire Full Stack Developer',
    description:
      'Open to full-stack roles and freelance product work. Reach out via email or LinkedIn.',
    url: '/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-18">
      <Contact />
    </div>
  )
}
