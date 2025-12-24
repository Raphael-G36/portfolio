'use client'

import { motion } from 'framer-motion'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { projects } from '@/data/projects'
import { sideProjects } from '@/data/sideProjects'
import { HiArrowRight, HiExternalLink } from 'react-icons/hi'

export default function Projects() {
  const mainProjects = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Projects Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-4">Main Projects</h2>
              <p className="text-body max-w-2xl mx-auto">
                A selection of projects showcasing my expertise in backend development,
                system architecture, and full-stack solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {mainProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card hover className="h-full flex flex-col">
                    <h3 className="heading-tertiary mb-3">{project.title}</h3>
                    <p className="text-body mb-4 flex-grow">{project.shortDescription}</p>
                    
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Role: <span className="font-normal">{project.role}</span>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-1 text-gray-500 dark:text-gray-400 text-xs">
                            +{project.techStack.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <Button
                      href={`/projects/${project.slug}`}
                      variant="outline"
                      size="sm"
                      className="w-full justify-center"
                    >
                      View Case Study
                      <HiArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Side Projects Section */}
          {sideProjects.length > 0 && (
            <div>
              <div className="text-center mb-12">
                <h2 className="heading-secondary mb-4">Side Projects</h2>
                <p className="text-body max-w-2xl mx-auto">
                  Additional projects and experiments I've worked on in my spare time.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {sideProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card hover className="h-full flex flex-col">
                      <h3 className="heading-tertiary mb-3">{project.name}</h3>
                      {project.description && (
                        <p className="text-body mb-4 flex-grow">{project.description}</p>
                      )}
                      
                      {project.url !== '#' ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-full px-4 py-2 mt-auto border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-200 text-sm font-medium"
                        >
                          Visit Project
                          <HiExternalLink className="ml-2 w-4 h-4" />
                        </a>
                      ) : (
                        <div className="inline-flex items-center justify-center w-full px-4 py-2 mt-auto border-2 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 rounded-lg text-sm font-medium cursor-not-allowed">
                          Coming Soon
                        </div>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

