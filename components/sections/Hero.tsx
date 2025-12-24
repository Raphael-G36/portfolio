'use client'

import { motion } from 'framer-motion'
import Button from '@/components/Button'
import { HiArrowDown } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="section-padding min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-primary mb-6">
              <span className="text-gray-900 dark:text-white">Hi, I'm </span>
              <span className="text-primary-600 dark:text-primary-400">Raphael Okonmah</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Software Engineer
            </p>
            <p className="text-body max-w-2xl mx-auto mb-8">
              CTO & Lead Developer at Emoefe Digitals. I specialize in backend development,
              system architecture, and building scalable solutions. Passionate about creating
              robust systems and mentoring the next generation of developers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/projects" size="lg">
                View My Work
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get In Touch
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16"
          >
            <a
              href="#about"
              className="inline-flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Scroll to about section"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <HiArrowDown className="w-6 h-6 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

