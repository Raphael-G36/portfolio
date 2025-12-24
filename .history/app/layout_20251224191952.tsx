import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Raphael Jordan | Software Engineer',
  description: 'Software Engineer specializing in backend development, system architecture, and full-stack solutions. CTO & Lead Developer at Emoefe Digitals.',
  keywords: ['Software Engineer', 'Backend Developer', 'Full Stack Developer', 'Python', 'PHP', 'System Architecture'],
  authors: [{ name: 'Raphael Jordan' }],
  openGraph: {
    title: 'Raphael Jordan | Software Engineer',
    description: 'Software Engineer specializing in backend development, system architecture, and full-stack solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raphael Jordan | Software Engineer',
    description: 'Software Engineer specializing in backend development, system architecture, and full-stack solutions.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

