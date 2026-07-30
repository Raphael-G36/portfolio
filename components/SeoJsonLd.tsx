import {
  personJsonLd,
  websiteJsonLd,
  professionalServiceJsonLd,
} from '@/data/seo'

export default function SeoJsonLd() {
  const graph = [personJsonLd(), websiteJsonLd(), professionalServiceJsonLd()]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
