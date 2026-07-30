import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Process from '@/components/sections/Process'
import Experience from '@/components/sections/Experience'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import type { Metadata } from 'next'
import { defaultDescription, seoKeywords } from '@/data/seo'

export const metadata: Metadata = {
  title: {
    absolute: 'Raphael Okonmah | Full Stack Product Engineer & Software Developer Nigeria',
  },
  description: defaultDescription,
  keywords: [...seoKeywords],
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Process />
      <Experience />
      <About />
      <Contact />
    </>
  )
}
