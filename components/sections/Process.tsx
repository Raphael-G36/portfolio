'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Discover',
    text: 'Clarify users, constraints, and what “done” means before writing code.',
  },
  {
    title: 'Build',
    text: 'Ship durable backend structure, clear access rules, and usable interfaces.',
  },
  {
    title: 'Deploy',
    text: 'Get it live with a maintainable stack — Linux, Docker, Nginx when needed.',
  },
  {
    title: 'Support',
    text: 'Stay close after launch: fixes, updates, and operational continuity.',
  },
]

export default function Process() {
  return (
    <section className="border-b border-paper-rule bg-paper py-16 md:py-20">
      <div className="container-custom">
        <div className="mb-10 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label-mono mb-3 text-accent">How I work</p>
            <h2 className="heading-tertiary">From problem to production</h2>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <p className="font-mono text-xs text-ink-faint">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
