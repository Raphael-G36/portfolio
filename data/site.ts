export const site = {
  name: 'Raphael Okonmah',
  role: 'Full Stack Product Engineer',
  email: 'raphaelokonmah3@gmail.com',
  location: 'Asaba, Nigeria',
  availability: 'Open to full-stack roles · Remote / hybrid',
  resumePath: '/Raphael_Okonmah_CV.pdf',
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
    'https://raphael-okonmah.vercel.app',
  links: {
    linkedin: 'https://linkedin.com/in/raphael-okonmah',
    github: 'https://github.com/Raphael-G36',
    twitter: 'https://x.com/OkonmahRaphael',
  },
} as const
