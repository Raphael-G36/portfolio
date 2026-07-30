import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Raphael Okonmah — Full Stack Product Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#F3F3F1',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#1C4E68',
            fontWeight: 600,
          }}
        >
          Full Stack Product Engineer
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 72,
              fontWeight: 700,
              color: '#121212',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            Raphael Okonmah
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              color: '#5C5C58',
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            Web apps · LMS · school systems · APIs · Python · PHP · JavaScript
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 22,
            color: '#8A8A84',
          }}
        >
          <span>Asaba, Nigeria · Remote / Hybrid</span>
          <span style={{ color: '#1C4E68' }}>Open to full-stack roles</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
