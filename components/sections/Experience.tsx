'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-padding border-b border-paper-rule bg-paper-raised">
      <div className="container-custom">
        <div className="mb-14 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label-mono mb-3 text-accent">Experience</p>
            <h2 className="heading-secondary">Where I work and what I own</h2>
          </div>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="grid gap-4 border-t border-paper-rule py-10 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-xs text-ink-faint">
                  {exp.startDate} — {exp.endDate || 'Present'}
                </p>
                {exp.current && (
                  <span className="mt-2 inline-block font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                    Current
                  </span>
                )}
              </div>

              <div className="md:col-span-4">
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                  {exp.title}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">{exp.company}</p>
                {exp.location && (
                  <p className="mt-1 text-xs text-ink-faint">{exp.location}</p>
                )}
              </div>

              <ul className="space-y-2.5 md:col-span-5">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-sm leading-relaxed text-ink-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
