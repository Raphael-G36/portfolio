'use client'

import { motion } from 'framer-motion'
import Card from '@/components/Card'
import { experiences } from '@/data/experience'
import { HiBriefcase, HiCalendar } from 'react-icons/hi'

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-secondary text-center mb-12">Professional Experience</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <HiBriefcase className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                        <h3 className="heading-tertiary">{exp.title}</h3>
                        {exp.current && (
                          <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        {exp.company}
                      </p>
                      {exp.location && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">{exp.location}</p>
                      )}
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                      <HiCalendar className="w-4 h-4" />
                      <span>
                        {exp.startDate} - {exp.endDate || 'Present'}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mt-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1.5">•</span>
                        <span className="text-body flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

