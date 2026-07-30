'use client'

import { motion } from 'framer-motion'
import Button from '@/components/Button'
import { Project } from '@/data/projects'
import { site } from '@/data/site'
import { HiArrowLeft, HiArrowUpRight } from 'react-icons/hi2'

interface ProjectCaseStudyProps {
  project: Project
}

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <article className="border-b border-paper-rule bg-paper pb-24 pt-28 md:pt-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <Button href="/#work" variant="outline" size="sm" className="mb-10">
            <HiArrowLeft className="mr-2 h-4 w-4" />
            Back to work
          </Button>

          <div className="mb-14 grid gap-8 border-b border-paper-rule pb-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <p className="label-mono text-accent">Case study</p>
                {project.confidential && (
                  <span className="border border-paper-rule px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
                    Private deployment
                  </span>
                )}
              </div>
              <h1 className="heading-secondary mb-4">{project.title}</h1>
              {project.client && (
                <p className="mb-4 text-sm text-ink-faint">{project.client}</p>
              )}
              <p className="text-body text-lg text-ink/80">{project.description}</p>

              {project.confidential && (
                <p className="mt-6 max-w-measure border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-ink-muted">
                  This is a confidential client system. Screenshots, credentials, and sensitive
                  implementation details are not shown publicly. I can walk through the work on a
                  call or under NDA.
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover"
                  >
                    Visit live project
                    <HiArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {project.confidential && (
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(
                      `Private walkthrough: ${project.title}`
                    )}`}
                    className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-accent"
                  >
                    Request a private walkthrough
                  </a>
                )}
              </div>
            </div>

            <aside className="space-y-8 lg:col-span-4 lg:border-l lg:border-paper-rule lg:pl-8">
              <div>
                <p className="label-mono mb-2">Role</p>
                <p className="text-sm text-ink">{project.role}</p>
              </div>
              <div>
                <p className="label-mono mb-3">Impact</p>
                <ul className="space-y-2">
                  {project.highlights.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-ink-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label-mono mb-3">Stack</p>
                <ul className="space-y-1.5">
                  {project.techStack.map((tech) => (
                    <li key={tech} className="font-mono text-xs text-ink-muted">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <div className="mx-auto grid max-w-3xl gap-14">
            <section>
              <h2 className="heading-tertiary mb-4">Problem</h2>
              <p className="text-body">{project.problem}</p>
            </section>

            {project.approach && (
              <section>
                <h2 className="heading-tertiary mb-4">Approach</h2>
                <p className="text-body">{project.approach}</p>
              </section>
            )}

            <section>
              <h2 className="heading-tertiary mb-4">What I built</h2>
              <p className="text-body">{project.solution}</p>
            </section>

            <section className="border-l-2 border-accent pl-6">
              <h2 className="heading-tertiary mb-4">Outcome</h2>
              <p className="text-body">{project.outcome}</p>
            </section>
          </div>
        </motion.div>
      </div>
    </article>
  )
}
