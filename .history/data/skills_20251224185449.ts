export interface SkillCategory {
  category: string
  skills: string[]
}

export const skills: SkillCategory[] = [
  {
    category: 'Backend Development',
    skills: ['Python', 'Flask', 'FastAPI', 'Django', 'PHP', 'CodeIgniter'],
  },
  {
    category: 'Version Control',
    skills: ['Git', 'GitHub'],
  },
  {
    category: 'System Design',
    skills: ['API Design', 'Database Design', 'Backend Architecture', 'System Integration'],
  },
  {
    category: 'Teaching & Mentorship',
    skills: ['Frontend Instruction', 'Backend Instruction', 'Code Review', 'Technical Mentoring'],
  },
]

