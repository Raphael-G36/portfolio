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
    title: 'Software Developer',
    company: 'Recurra',
    startDate: 'May 2026',
    endDate: null,
    current: true,
    description: [
      'Ship and improve full-stack features on a recurring payments platform',
      'Own backend, database, and user-facing changes from requirements through release',
      'Debug production issues and harden reliability as the product evolves',
    ],
  },
  {
    id: '2',
    title: 'IT Consultant',
    company: 'Federal Medical Centre, Asaba',
    location: 'Asaba, Nigeria',
    startDate: 'April 2026',
    endDate: null,
    current: true,
    description: [
      'Provide post-deployment support for the hospital EMR and management systems',
      'Troubleshoot production issues and help keep clinical IT systems reliable',
      'Support updates, configuration, and infrastructure needed for day-to-day EMR use',
    ],
  },
  {
    id: '3',
    title: 'CTO & Lead Developer',
    company: 'Emoefe Digitals',
    startDate: 'September 2025',
    endDate: null,
    current: true,
    description: [
      'Lead design and delivery of web products for businesses and organizations',
      'Build and deploy full-stack systems (Flask, CodeIgniter, MySQL) with Docker/Nginx',
      'Mentor students in practical web development',
    ],
  },
  {
    id: '4',
    title: 'ICT Intern / Software Developer Intern',
    company: 'Federal Medical Centre, Asaba',
    location: 'Asaba, Nigeria',
    startDate: 'April 2024',
    endDate: 'September 2024',
    current: false,
    description: [
      'Built an e-library web app (CodeIgniter 4, MySQL) for digital learning resources',
      'Supported ICT operations and translated stakeholder needs into software features',
    ],
  },
]
