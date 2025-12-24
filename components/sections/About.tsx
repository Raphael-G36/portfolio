'use client'

import { motion } from 'framer-motion'
import Card from '@/components/Card'

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading-secondary text-center mb-12">About Me</h2>
          
          <div className="space-y-6 text-body">
            <p>
              I'm a Software Engineer with a passion for building robust backend systems and
              architecting scalable solutions. Currently serving as CTO & Lead Developer at
              Emoefe Digitals, I lead technical strategy and development teams while
              contributing hands-on to critical projects.
            </p>
            
            <p>
              My expertise lies in backend development using Python (Flask, FastAPI, Django)
              and PHP (CodeIgniter), with a strong focus on system design, API architecture,
              and database optimization. I'm particularly interested in creating systems that
              solve real-world problems efficiently and reliably.
            </p>
            
            <p>
              Beyond development, I'm committed to knowledge sharing and mentorship. I enjoy
              teaching both frontend and backend development to beginners, helping them build
              strong foundations in software engineering principles and best practices.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card hover>
              <h3 className="heading-tertiary mb-3">Education</h3>
              <div className="space-y-2">
                <p className="font-semibold text-gray-900 dark:text-white">
                  B.Sc. Software Engineering
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  University of Delta, Agbor
                </p>
              </div>
            </Card>

            <Card hover>
              <h3 className="heading-tertiary mb-3">Current Role</h3>
              <div className="space-y-2">
                <p className="font-semibold text-gray-900 dark:text-white">
                  CTO & Lead Developer
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Emoefe Digitals
                </p>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

