import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Update this with your actual domain after deployment
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://raphael-okonmah.vercel.app/'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

