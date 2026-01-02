'use client'

import { motion } from 'framer-motion'
import Button from '@/components/Button'
import Card from '@/components/Card'
import { Project } from '@/data/projects'
import { HiArrowLeft, HiCode, HiExternalLink } from 'react-icons/hi'

interface ProjectCaseStudyProps {
  project: Project
}

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <div className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Back Button */}
          <Button
            href="/projects"
            variant="outline"
            size="sm"
            className="mb-8"
          >
            <HiArrowLeft className="mr-2 w-4 h-4" />
            Back to Projects
          </Button>

          {/* Header */}
          <div className="mb-12">
            <h1 className="heading-primary mb-4">{project.title}</h1>
            <p className="text-body text-xl">{project.description}</p>
            {project.link && (
              <div className="mt-6">
                <Button
                  href={project.link}
                  variant="primary"
                  size="md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project
                  <HiExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <div className="flex items-center space-x-2 mb-4">
                <HiCode className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <h2 className="heading-tertiary">Role</h2>
              </div>
              <p className="text-body">{project.role}</p>
            </Card>

            <Card>
              <div className="flex items-center space-x-2 mb-4">
                <HiCode className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <h2 className="heading-tertiary">Tech Stack</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-md text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          {/* Problem */}
          <Card className="mb-6">
            <h2 className="heading-tertiary mb-4">Problem</h2>
            <p className="text-body">{project.problem}</p>
          </Card>

          {/* Solution */}
          <Card className="mb-6">
            <h2 className="heading-tertiary mb-4">Solution</h2>
            <p className="text-body">{project.solution}</p>
          </Card>

          {/* Outcome */}
          <Card className="mb-8">
            <h2 className="heading-tertiary mb-4">Outcome</h2>
            <p className="text-body">{project.outcome}</p>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center">
            <Button href="/projects" variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

