'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden border-b border-paper-rule bg-paper pt-24 md:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] bg-accent-soft/60 lg:block"
      />

      <div className="container-custom relative grid min-h-[calc(88vh-6rem)] items-end pb-16 md:pb-24 lg:grid-cols-12 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-8"
        >
          <p className="label-mono mb-6 text-accent">Full Stack Product Engineer</p>

          <h1 className="heading-primary mb-6 max-w-4xl">
            Raphael
            <br />
            Okonmah
          </h1>

          <p className="text-body mb-10 max-w-measure">
            I design and ship full-stack products for real organizations — from
            publication workflows and learning platforms to school operations systems.
            Python, Flask, PHP, CodeIgniter, JavaScript, MySQL, and production deployment.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/#work" className="btn-primary">
              View selected work
            </Link>
            <a
              href="mailto:raphaelokonmah3@gmail.com"
              className="text-sm text-ink-muted underline-offset-4 hover:text-accent hover:underline"
            >
              raphaelokonmah3@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-14 hidden border-l border-paper-rule pl-8 lg:col-span-4 lg:mt-0 lg:block"
        >
          <p className="label-mono mb-4">Currently</p>
          <ul className="space-y-4 text-sm leading-relaxed text-ink-muted">
            <li>
              <span className="block font-medium text-ink">Software Developer</span>
              Recurra
            </li>
            <li>
              <span className="block font-medium text-ink">IT Consultant</span>
              Federal Medical Centre, Asaba
            </li>
            <li>
              <span className="block font-medium text-ink">CTO & Lead Developer</span>
              Emoefe Digitals
            </li>
          </ul>
        </motion.aside>
      </div>
    </section>
  )
}
