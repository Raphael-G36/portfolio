'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section-padding border-b border-paper-rule bg-paper">
      <div className="container-custom">
        <div className="mb-14 max-w-2xl">
          <p className="label-mono mb-3 text-accent">Skills</p>
          <h2 className="heading-secondary mb-4">Tools I use to ship</h2>
          <p className="text-body">
            A practical stack focused on backend systems, responsive frontends, and reliable deployment.
          </p>
        </div>

        <div className="divide-y divide-paper-rule border-y border-paper-rule">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="grid gap-4 py-8 md:grid-cols-12 md:gap-8"
            >
              <h3 className="font-display text-lg font-semibold text-ink md:col-span-4">
                {category.category}
              </h3>
              <div className="md:col-span-8">
                <p className="text-body mb-4 text-sm">{category.description}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="font-mono text-xs text-ink-muted">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
