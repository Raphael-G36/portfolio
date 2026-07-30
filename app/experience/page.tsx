import type { Metadata } from 'next'
import Experience from '@/components/sections/Experience'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Professional experience of Raphael Okonmah: Software Developer at Recurra (recurring payments), IT Consultant at Federal Medical Centre Asaba (EMR systems), CTO & Lead Developer at Emoefe Digitals, and ICT Intern at FMC Asaba. Full-stack development, deployment, and IT consulting.',
  keywords: [
    'Raphael Okonmah experience',
    'Software Developer Recurra',
    'IT Consultant FMC Asaba',
    'Federal Medical Centre Asaba EMR',
    'CTO Emoefe Digitals',
    'full stack developer work history',
    'hospital IT consulting Nigeria',
    'recurring payments developer',
  ],
  alternates: { canonical: '/experience' },
  openGraph: {
    title: 'Experience | Raphael Okonmah',
    description:
      'Roles at Recurra, Federal Medical Centre Asaba, and Emoefe Digitals — full-stack product engineering and IT consulting.',
    url: '/experience',
  },
}

export default function ExperiencePage() {
  return (
    <div className="pt-16 md:pt-18">
      <Experience />
    </div>
  )
}
