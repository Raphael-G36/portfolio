import { site } from '@/data/site'

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://raphael-okonmah.vercel.app'

/** Primary + long-tail keywords for meta tags and structured data */
export const seoKeywords = [
  // Identity & roles
  'Raphael Okonmah',
  'Raphael Okonmah portfolio',
  'Raphael Okonmah software engineer',
  'Raphael Okonmah full stack developer',
  'Full Stack Product Engineer',
  'Full Stack Developer',
  'Full Stack Developer Nigeria',
  'Full Stack Developer Asaba',
  'Software Engineer',
  'Software Engineer Nigeria',
  'Software Engineer portfolio',
  'Product Engineer',
  'Backend Developer',
  'Frontend Developer',
  'Web Developer',
  'Web Developer Nigeria',
  'Application Developer',
  'Software Developer Recurra',
  'CTO Emoefe Digitals',
  'IT Consultant FMC Asaba',
  'IT Consultant Federal Medical Centre Asaba',

  // Hiring intent
  'hire full stack developer',
  'hire full stack developer Nigeria',
  'remote full stack developer',
  'hybrid full stack developer',
  'full stack developer for hire',
  'freelance full stack developer',
  'freelance web developer Nigeria',
  'software engineer open to work',
  'full stack intern',
  'full stack developer intern',

  // Core stack
  'Python developer',
  'Flask developer',
  'FastAPI developer',
  'Django developer',
  'PHP developer',
  'CodeIgniter developer',
  'JavaScript developer',
  'MySQL developer',
  'PostgreSQL developer',
  'SQLite',
  'REST API developer',
  'CRUD applications',
  'authentication systems',
  'role-based access control',
  'RBAC',
  'database design',
  'responsive web development',
  'HTML5 CSS3 Bootstrap',

  // DevOps / deployment
  'Docker',
  'Linux',
  'Ubuntu',
  'Nginx',
  'Gunicorn',
  'application deployment',
  'server configuration',
  'Git',
  'GitHub',

  // Domains / products
  'Learning Management System developer',
  'LMS developer',
  'school management software',
  'journal publication software',
  'Delta Journal of Clinical Practice',
  'hospital EMR support',
  'Electronic Medical Record',
  'recurring payments platform',
  'Paystack integration',
  'business management systems',
  'organizational websites',
  'inventory POS system',
  'e-library application',

  // Soft / process
  'system architecture',
  'backend architecture',
  'API design',
  'full stack case studies',
  'software mentorship',
  'web development training',
] as const

export const defaultDescription =
  'Raphael Okonmah — Full Stack Product Engineer & Software Developer in Asaba, Nigeria. Builds web applications, LMS platforms, school management systems, journal publishing software, REST APIs, and deployed solutions with Python, Flask, FastAPI, Django, PHP, CodeIgniter, JavaScript, and MySQL. Open to full-stack roles, remote or hybrid.'

export const defaultTitle = {
  default: 'Raphael Okonmah | Full Stack Product Engineer & Software Developer',
  template: '%s | Raphael Okonmah',
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url: siteUrl,
    image: `${siteUrl}/icon.svg`,
    jobTitle: site.role,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Asaba',
      addressRegion: 'Delta State',
      addressCountry: 'NG',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'University of Delta, Agbor',
    },
    knowsAbout: [
      'Full Stack Development',
      'Python',
      'Flask',
      'FastAPI',
      'Django',
      'PHP',
      'CodeIgniter',
      'JavaScript',
      'MySQL',
      'PostgreSQL',
      'REST APIs',
      'Docker',
      'Nginx',
      'Learning Management Systems',
      'School Management Software',
      'Electronic Medical Records',
      'System Architecture',
    ],
    sameAs: [site.links.linkedin, site.links.github, site.links.twitter],
    worksFor: [
      { '@type': 'Organization', name: 'Recurra' },
      { '@type': 'Organization', name: 'Federal Medical Centre, Asaba' },
      { '@type': 'Organization', name: 'Emoefe Digitals' },
    ],
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${site.name} Portfolio`,
    url: siteUrl,
    description: defaultDescription,
    author: {
      '@type': 'Person',
      name: site.name,
    },
    inLanguage: 'en',
  }
}

export function professionalServiceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${site.name} — Full Stack Product Engineering`,
    url: siteUrl,
    description: defaultDescription,
    provider: {
      '@type': 'Person',
      name: site.name,
    },
    areaServed: ['NG', 'Remote'],
    serviceType: [
      'Full Stack Development',
      'Web Application Development',
      'Backend Development',
      'API Development',
      'Learning Management Systems',
      'Business Software Development',
      'IT Consulting',
    ],
  }
}
