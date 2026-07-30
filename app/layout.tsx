import type { Metadata, Viewport } from 'next'
import { Syne, Source_Sans_3, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SeoJsonLd from '@/components/SeoJsonLd'
import { defaultDescription, defaultTitle, seoKeywords, siteUrl } from '@/data/seo'
import { site } from '@/data/site'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  keywords: [...seoKeywords],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  category: 'technology',
  classification: 'Portfolio',
  applicationName: `${site.name} Portfolio`,
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: defaultTitle.default,
    description: defaultDescription,
    url: siteUrl,
    siteName: `${site.name} | Full Stack Product Engineer`,
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle.default,
    description: defaultDescription,
    creator: '@OkonmahRaphael',
  },
  other: {
    'linkedin:profile': site.links.linkedin,
    'geo.region': 'NG-DE',
    'geo.placename': 'Asaba',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F3F3F1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${sourceSans.variable} ${plexMono.variable} font-sans`}
      >
        <SeoJsonLd />
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
