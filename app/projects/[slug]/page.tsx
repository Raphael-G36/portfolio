import { notFound } from 'next/navigation'
import ProjectCaseStudy from '@/components/ProjectCaseStudy'
import { projects } from '@/data/projects'

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }
  
  return {
    title: `${project.title} | Raphael Okonmah`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  
  if (!project) {
    notFound()
  }
  
  return (
    <div className="pt-20">
      <ProjectCaseStudy project={project} />
    </div>
  )
}

