export interface SkillCategory {
  category: string
  description: string
  skills: string[]
}

export const skills: SkillCategory[] = [
  {
    category: 'Backend Development',
    description: 'Specialized in building robust, scalable backend systems using Python and PHP. Experienced with modern frameworks like Flask, FastAPI, and Django for creating RESTful APIs and microservices. Proficient in PHP with CodeIgniter for rapid application development.',
    skills: ['Python', 'Flask', 'FastAPI', 'Django', 'PHP', 'CodeIgniter'],
  },
  {
    category: 'Version Control',
    description: 'Proficient in Git workflows and GitHub for collaborative development. Experienced in managing code repositories, branching strategies, pull requests, and maintaining clean commit histories for team projects.',
    skills: ['Git', 'GitHub'],
  },
  {
    category: 'System Design',
    description: 'Expertise in designing scalable system architectures, creating well-structured APIs, and optimizing database schemas. Skilled in integrating complex systems and ensuring seamless communication between different components.',
    skills: ['API Design', 'Database Design', 'Backend Architecture', 'System Integration'],
  },
  {
    category: 'Teaching & Mentorship',
    description: 'Passionate about knowledge sharing and helping developers grow. Experienced in teaching both frontend and backend development fundamentals, conducting code reviews, and providing technical guidance to help others build strong foundations in software engineering.',
    skills: ['Frontend Instruction', 'Backend Instruction', 'Code Review', 'Technical Mentoring'],
  },
]

