'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/Button'
import { site } from '@/data/site'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Failed to send message')

      // Reliable delivery: open the visitor's mail client with a prefilled message
      if (data.mailto) {
        window.location.href = data.mailto
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred')
      setTimeout(() => {
        setStatus('idle')
        setErrorMessage('')
      }, 5000)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="section-padding bg-paper">
      <div className="container-custom">
        <div className="grid gap-14 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <p className="label-mono mb-3 text-accent">Contact</p>
            <h2 className="heading-secondary mb-5">Let&apos;s talk about the next build</h2>
            <p className="mb-2 font-medium text-ink">{site.availability}</p>
            <p className="text-body mb-8">
              Roles, freelance product work, or a private walkthrough of confidential projects.
            </p>

            <div className="space-y-4 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="block text-ink hover:text-accent"
              >
                {site.email}
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink hover:text-accent"
              >
                <FaLinkedin className="h-4 w-4" />
                linkedin.com/in/raphael-okonmah
              </a>
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink-muted hover:text-accent"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={site.resumePath}
                download
                className="inline-flex pt-2 font-mono text-xs uppercase tracking-[0.12em] text-accent hover:text-accent-hover"
              >
                Download resume (PDF)
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="label-mono mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-paper-rule bg-paper-raised px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="label-mono mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-paper-rule bg-paper-raised px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="label-mono mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none border border-paper-rule bg-paper-raised px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
                  placeholder="What are you working on?"
                />
              </div>

              {status === 'success' && (
                <p className="text-sm text-accent">
                  Opening your email client with the message ready to send…
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-700">
                  {errorMessage || 'Failed to send. Please email me directly.'}
                </p>
              )}

              <Button type="submit" size="lg" disabled={status === 'loading'}>
                {status === 'loading' ? 'Preparing…' : 'Send message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
