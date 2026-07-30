'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/data/projects'
import { HiArrowUpRight } from 'react-icons/hi2'

export default function Projects() {
  const mainProjects = projects.filter((p) => p.featured)

  return (
    <section id="work" className="section-padding border-b border-paper-rule bg-paper">
      <div className="container-custom">
        <div className="mb-10 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="label-mono mb-3 text-accent">Selected work</p>
            <h2 className="heading-secondary">Products shipped for real organizations</h2>
          </div>
          <p className="text-body lg:col-span-5 lg:pb-1">
            Three case studies spanning medical publishing, learning delivery, and school
            operations — built end-to-end with production constraints in mind.
          </p>
        </div>

        <p className="mb-10 max-w-2xl border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-ink-muted">
          Some projects are confidential client systems. Case studies describe scope,
          decisions, and impact only — interfaces and sensitive details are not shown publicly.
          Happy to walk through private work on a call or under NDA.
        </p>

        <div className="divide-y divide-paper-rule border-y border-paper-rule">
          {mainProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group grid gap-6 py-10 md:py-12 lg:grid-cols-12 lg:gap-8"
            >
              <div className="lg:col-span-1">
                <span className="font-mono text-sm text-ink-faint">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="lg:col-span-5">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="heading-tertiary group-hover:text-accent">
                    <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                  </h3>
                  {project.confidential && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
                      Confidential
                    </span>
                  )}
                </div>
                {project.client && (
                  <p className="mb-3 text-sm text-ink-faint">{project.client}</p>
                )}
                <p className="text-body max-w-measure">{project.shortDescription}</p>
              </div>

              <div className="flex flex-col justify-between gap-6 lg:col-span-6 lg:pl-4">
                <div>
                  <p className="label-mono mb-2">Role</p>
                  <p className="mb-4 text-sm text-ink">{project.role}</p>
                  <ul className="mb-4 space-y-1.5">
                    {project.highlights.slice(0, 3).map((item) => (
                      <li key={item} className="text-sm text-ink-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span key={tech} className="font-mono text-xs text-ink-faint">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-5">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover"
                  >
                    Read case study
                    <HiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-accent"
                    >
                      Live site
                      <HiArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
