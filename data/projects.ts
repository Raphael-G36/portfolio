export interface Project {
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  problem: string
  solution: string
  techStack: string[]
  role: string
  outcome: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'lms-emoefe-digitals',
    title: 'LMS for Emoefe Digitals',
    description: 'Internal learning management system designed to streamline employee training and knowledge management.',
    shortDescription: 'Internal learning management system for employee training and knowledge management.',
    problem: 'Emoefe Digitals needed a centralized platform to manage employee training, track learning progress, and maintain organizational knowledge. The lack of a structured learning system made it difficult to onboard new employees and ensure consistent skill development across the team.',
    solution: 'Developed a comprehensive Learning Management System (LMS) that provides course management, progress tracking, assessment tools, and certification capabilities. The system enables administrators to create and manage training modules while allowing employees to access learning materials, complete courses, and track their professional development.',
    techStack: ['Python', 'Flask', 'PostgreSQL', 'JavaScript', 'HTML/CSS'],
    role: 'Architect & Lead Developer',
    outcome: 'Successfully deployed an internal LMS that improved employee onboarding efficiency and standardized training processes. The system now serves as the primary platform for knowledge management and professional development within the organization.',
    featured: true,
  },
  {
    id: '2',
    slug: 'journal-publication-software',
    title: 'Journal Publication Software',
    description: 'Comprehensive manuscript submission and peer review system for Delta Journal of Clinical Practice.',
    shortDescription: 'Manuscript submission, peer review, and editorial workflow system for medical journal publication.',
    problem: 'Delta Journal of Clinical Practice required a digital solution to manage the entire publication workflow, from manuscript submission through peer review to final publication. The existing manual process was time-consuming, error-prone, and lacked proper tracking mechanisms.',
    solution: 'Built a full-stack publication management system that handles manuscript submission, automated peer review assignment, editorial workflow management, version control, and final publication. The system includes role-based access control for authors, reviewers, and editors, with comprehensive tracking and notification features.',
    techStack: ['PHP', 'CodeIgniter', 'MySQL', 'JavaScript', 'Bootstrap'],
    role: 'Full-stack Developer',
    outcome: 'Delivered a production-ready publication system that streamlined the journal\'s editorial process, reduced submission-to-publication time, and improved the overall quality of the peer review process. The system successfully handles multiple concurrent submissions and maintains a complete audit trail.',
    featured: true,
  },
  {
    id: '3',
    slug: 'eye-gaze-tracking-system',
    title: 'Eye Gaze Tracking System',
    description: 'Computer vision system for malpractice detection through behavioral analysis and eye gaze tracking.',
    shortDescription: 'Computer vision system for malpractice detection using eye gaze tracking and behavioral analysis.',
    problem: 'There was a need to develop a system capable of detecting potential malpractice scenarios through behavioral analysis. Traditional monitoring methods were insufficient for identifying subtle behavioral patterns that could indicate issues requiring attention.',
    solution: 'Developed a computer vision-based eye gaze tracking system that analyzes behavioral patterns and eye movement data. The system processes video feeds in real-time, applies machine learning algorithms to detect anomalies, and generates alerts when suspicious patterns are identified. The backend handles data processing, analysis, and reporting.',
    techStack: ['Python', 'OpenCV', 'TensorFlow', 'FastAPI', 'Computer Vision'],
    role: 'Backend & System Logic Contributor',
    outcome: 'Contributed to the development of a sophisticated tracking system that successfully identifies behavioral patterns with high accuracy. The system\'s backend architecture efficiently processes large volumes of video data and provides actionable insights for malpractice detection.',
    featured: true,
  },
]

