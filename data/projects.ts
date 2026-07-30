export interface Project {
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  problem: string
  approach: string
  solution: string
  techStack: string[]
  role: string
  outcome: string
  highlights: string[]
  featured: boolean
  confidential: boolean
  link?: string
  client?: string
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'journal-publication-software',
    title: 'Delta Journal of Clinical Practice',
    client: 'MDCAN, Federal Medical Centre, Asaba',
    description:
      'A live journal website and publishing workflow for a medical and academic organization.',
    shortDescription:
      'Live publication site and editorial workflow for a clinical practice journal.',
    problem:
      'The journal needed a credible public presence and a practical way to publish and manage content. Manual coordination made editorial work slow and hard to track.',
    approach:
      'I treated it as both a public reading site and an internal publishing system — clear information architecture for readers, plus admin tooling for editors.',
    solution:
      'Built a database-driven journal platform in PHP/CodeIgniter with content publishing, management workflows, and responsive interfaces. Supported deployment and ongoing updates after launch.',
    techStack: ['PHP', 'CodeIgniter', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    role: 'Full-stack Developer',
    outcome:
      'Live in production at djcp.org — used by a real medical organization, with ongoing maintenance and content updates.',
    highlights: [
      'Public journal site in production',
      'Editorial content management workflows',
      'Post-launch maintenance and updates',
    ],
    featured: true,
    confidential: false,
    link: 'https://djcp.org/',
  },
  {
    id: '2',
    slug: 'lms-emoefe-digitals',
    title: 'Learning Management System',
    client: 'Emoefe Digitals',
    description:
      'A private learning platform for users, courses, content, payments, and learner activity.',
    shortDescription:
      'Private LMS with courses, payments, and learner workflows.',
    problem:
      'The organization needed one system to run learning programs — users, courses, progress, and payments — instead of scattered tools.',
    approach:
      'Backend structure first (users, courses, access, payments), then a responsive learning UI and operational tooling for content and maintenance. Product details remain confidential.',
    solution:
      'Built full-stack LMS features in Python/Flask: course and content management, Paystack payments, email workflows, performance improvements (SEO, lazy loading), and deployment support.',
    techStack: [
      'Python',
      'Flask',
      'MySQL',
      'JavaScript',
      'HTML',
      'CSS',
      'Bootstrap',
      'Paystack',
    ],
    role: 'Architect & Lead Developer',
    outcome:
      'Shipped an internal LMS used for organizational learning delivery, with live payment flows and a maintainable deployment path.',
    highlights: [
      'Owned architecture and delivery',
      'Paystack payment integration',
      'Private deployment — UI not shown publicly',
    ],
    featured: true,
    confidential: true,
  },
  {
    id: '3',
    slug: 'school-management-software',
    title: 'School Management Software',
    client: 'Great Blossom Academy',
    description:
      'A private multi-user school operations system with role-based access for staff teams.',
    shortDescription:
      'Private role-based school operations system for academic and admin teams.',
    problem:
      'Day-to-day school work was split across spreadsheets and informal processes. Different roles needed different access to the same operational data.',
    approach:
      'Designed permissions first — Admin, Head of Department, Secretary, Teacher — then built shared records and workflows around those boundaries. Screens and data stay private to the client.',
    solution:
      'Developed a multi-user PHP/CodeIgniter platform with role-based access control, database-driven workflows, and responsive interfaces for users, records, and school operations.',
    techStack: ['PHP', 'CodeIgniter', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    role: 'Full-stack Developer',
    outcome:
      'Delivered a production operations system supporting multiple school roles with clearer access control and shared digital workflows.',
    highlights: [
      'Four role types with access control',
      'Shared academic & admin workflows',
      'Private client system — details on request',
    ],
    featured: true,
    confidential: true,
  },
  {
    id: '4',
    slug: 'eye-gaze-tracking-system',
    title: 'EyeTrack Pro',
    description:
      'Computer-vision prototype for detecting prolonged look-away behavior during online assessments.',
    shortDescription:
      'Eye-gaze monitoring prototype for online assessment integrity.',
    problem:
      'Online assessments lack reliable signals when a candidate looks away for extended periods. Manual proctoring does not scale.',
    approach:
      'Built a calibration-aware prototype using facial landmarks and gaze heuristics, with local processing focused on actionable alerts.',
    solution:
      'Developed a Flask/FastAPI system with OpenCV and MediaPipe Face Mesh to analyze landmarks and detect prolonged look-away events.',
    techStack: ['Python', 'Flask', 'FastAPI', 'OpenCV', 'MediaPipe', 'NumPy', 'JavaScript'],
    role: 'Backend & System Logic Contributor',
    outcome:
      'Working prototype demonstrating gaze-based integrity signals with session analytics and local processing.',
    highlights: [
      'MediaPipe face-mesh pipeline',
      'Prolonged look-away detection',
      'Prototype demo available',
    ],
    featured: false,
    confidential: false,
    link: 'https://eye-gaze-tracker.up.railway.app/',
  },
]
