import type { Metadata } from 'next'
import About from '@/components/sections/About'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Raphael Okonmah — Full Stack Product Engineer and Software Engineering graduate (First Class Honours, University of Delta). Experience with Python, Flask, FastAPI, Django, PHP, CodeIgniter, MySQL, Docker, Nginx, LMS platforms, school management software, and hospital EMR consulting in Asaba, Nigeria.',
  keywords: [
    'About Raphael Okonmah',
    'Full Stack Product Engineer bio',
    'Software Engineer University of Delta',
    'First Class Software Engineering',
    'Python Flask PHP developer Nigeria',
    'Emoefe Digitals CTO',
    'Recurra software developer',
    'FMC Asaba IT consultant',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Raphael Okonmah | Full Stack Product Engineer',
    description:
      'First-Class Software Engineering graduate building full-stack products, LMS platforms, and business systems in Nigeria.',
    url: '/about',
  },
}

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-18">
      <About />
    </div>
  )
}
