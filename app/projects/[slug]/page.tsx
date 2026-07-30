import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ProjectCaseStudy from '@/components/ProjectCaseStudy'
import { projects } from '@/data/projects'
import { siteUrl } from '@/data/seo'

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  const title = project.title
  const description = `${project.description} Role: ${project.role}. Stack: ${project.techStack.join(', ')}. ${project.outcome}`
  const keywords = [
    project.title,
    project.client,
    project.role,
    ...project.techStack,
    ...project.highlights,
    'Raphael Okonmah case study',
    'full stack project',
    project.confidential ? 'confidential software project' : 'live web application',
  ].filter(Boolean) as string[]

  return {
    title,
    description: description.slice(0, 300),
    keywords,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Raphael Okonmah`,
      description: project.shortDescription,
      url: `${siteUrl}/projects/${project.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Raphael Okonmah`,
      description: project.shortDescription,
    },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <div className="pt-20">
        <ProjectCaseStudy project={project} />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.title,
            description: project.description,
            author: {
              '@type': 'Person',
              name: 'Raphael Okonmah',
              url: siteUrl,
            },
            keywords: project.techStack.join(', '),
            url: `${siteUrl}/projects/${project.slug}`,
            ...(project.link ? { sameAs: project.link } : {}),
          }),
        }}
      />
    </>
  )
}
