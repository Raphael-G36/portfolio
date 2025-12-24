export interface Experience {
  id: string
  title: string
  company: string
  location?: string
  startDate: string
  endDate: string | null
  current: boolean
  description: string[]
}

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'CTO & Lead Developer',
    company: 'Emoefe Digitals',
    startDate: '2023',
    endDate: null,
    current: true,
    description: [
      'Leading technical strategy and architecture decisions for the organization',
      'Managing development teams and overseeing project delivery',
      'Architecting and developing internal systems including the Learning Management System',
      'Mentoring junior developers and establishing best practices',
      'Collaborating with stakeholders to align technical solutions with business objectives',
    ],
  },
  {
    id: '2',
    title: 'IT Intern',
    company: 'FMC Asaba (IT Unit)',
    location: 'Asaba, Nigeria',
    startDate: '2022',
    endDate: '2023',
    current: false,
    description: [
      'Assisted with IT infrastructure maintenance and troubleshooting',
      'Supported system administration tasks and user support',
      'Participated in network configuration and security implementations',
      'Gained hands-on experience with enterprise IT systems',
    ],
  },
]

