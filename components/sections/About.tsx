'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/skills'

export default function About() {
  return (
    <section id="about" className="section-padding border-b border-paper-rule bg-paper">
      <div className="container-custom">
        <div className="grid gap-14 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <p className="label-mono mb-3 text-accent">About</p>
            <h2 className="heading-secondary mb-6">Serious about shipping useful software</h2>
            <div className="space-y-5 text-body">
              <p>
                I&apos;m a Software Engineering graduate with First-Class Honours from the
                University of Delta, Agbor. As a Full Stack Product Engineer based in Asaba,
                Nigeria, I build web applications, business systems, and deployed solutions —
                not demos.
              </p>
              <p>
                Day to day I ship product features at Recurra, provide hospital EMR consulting
                at Federal Medical Centre Asaba, and lead full-stack delivery as CTO at Emoefe
                Digitals — working across Python, Flask, PHP, CodeIgniter, JavaScript, MySQL,
                Docker, and Nginx.
              </p>
            </div>

            <div className="mt-10 border-t border-paper-rule pt-8">
              <p className="label-mono mb-3">Education</p>
              <p className="font-medium text-ink">B.Sc. Software Engineering</p>
              <p className="mt-1 text-sm text-ink-muted">
                University of Delta, Agbor — First Class Honours · CGPA 4.80 / 5.00
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <p className="label-mono mb-8">Capabilities</p>
            <div className="space-y-8">
              {skills.slice(0, 4).map((category) => (
                <div key={category.category} className="border-b border-paper-rule pb-6 last:border-0">
                  <h3 className="mb-3 font-display text-lg font-semibold text-ink">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="font-mono text-xs text-ink-muted">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
