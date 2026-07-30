import type { Metadata } from 'next'
import Skills from '@/components/sections/Skills'

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Technical skills of Raphael Okonmah: Python, Flask, FastAPI, Django, PHP, CodeIgniter, JavaScript, HTML5, CSS3, Bootstrap, MySQL, PostgreSQL, SQLite, Git, GitHub, Docker, Linux, Nginx, Gunicorn, REST APIs, authentication, RBAC, and system architecture.',
  keywords: [
    'Raphael Okonmah skills',
    'Python Flask FastAPI Django',
    'PHP CodeIgniter MySQL',
    'JavaScript Bootstrap developer',
    'Docker Nginx Gunicorn',
    'REST API database design',
    'full stack developer skills',
    'backend developer Nigeria',
  ],
  alternates: { canonical: '/skills' },
  openGraph: {
    title: 'Skills | Raphael Okonmah',
    description:
      'Full-stack skills: Python, PHP, JavaScript, databases, Docker, Nginx, and system design.',
    url: '/skills',
  },
}

export default function SkillsPage() {
  return (
    <div className="pt-16 md:pt-18">
      <Skills />
    </div>
  )
}
