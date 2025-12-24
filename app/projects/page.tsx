import Projects from '@/components/sections/Projects'

export const metadata = {
  title: 'Projects | Raphael Okonmah',
  description: 'Featured projects and case studies by Raphael Okonmah, including LMS systems, journal publication software, and computer vision applications.',
}

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <Projects />
    </div>
  )
}

