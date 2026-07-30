export interface SkillCategory {
  category: string
  description: string
  skills: string[]
}

export const skills: SkillCategory[] = [
  {
    category: 'Backend Development',
    description: 'Specialized in building robust, scalable backend systems using Python and PHP. Experienced with Flask, FastAPI, and Django for RESTful APIs, plus CodeIgniter for rapid application development. Strong with authentication, role-based access control, and CRUD applications.',
    skills: ['Python', 'Flask', 'FastAPI', 'Django', 'PHP', 'CodeIgniter'],
  },
  {
    category: 'Frontend Development',
    description: 'Build responsive user interfaces with modern web standards. Experienced delivering clean, usable frontends for business systems, learning platforms, and organizational websites.',
    skills: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    category: 'Databases',
    description: 'Design and work with relational databases for production applications, from schema design to query-backed features across web and business systems.',
    skills: ['MySQL', 'PostgreSQL', 'SQLite'],
  },
  {
    category: 'Tools & Deployment',
    description: 'Ship and maintain applications with Git/GitHub workflows and production-ready deployment stacks on Linux using Docker, Nginx, and Gunicorn.',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'Nginx', 'Gunicorn'],
  },
  {
    category: 'System Design',
    description: 'Expertise in designing scalable architectures, creating well-structured APIs, and optimizing database schemas. Skilled in integrating systems and ensuring reliable communication between components.',
    skills: ['REST APIs', 'Database Design', 'Backend Architecture', 'System Integration'],
  },
  {
    category: 'Teaching & Mentorship',
    description: 'Passionate about knowledge sharing and helping developers grow. Experienced training students in web development fundamentals and providing practical software development guidance.',
    skills: ['Frontend Instruction', 'Backend Instruction', 'Code Review', 'Technical Mentoring'],
  },
]
