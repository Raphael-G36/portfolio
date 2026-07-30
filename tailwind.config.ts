import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#121212',
          muted: '#5C5C58',
          faint: '#8A8A84',
        },
        paper: {
          DEFAULT: '#F3F3F1',
          raised: '#FAFAF8',
          rule: '#D9D9D4',
        },
        accent: {
          DEFAULT: '#1C4E68',
          hover: '#163E53',
          soft: '#E4EEF3',
        },
        primary: {
          50: '#E4EEF3',
          100: '#C5D9E4',
          200: '#9BBDCE',
          300: '#6F9EB5',
          400: '#457F9A',
          500: '#1C4E68',
          600: '#163E53',
          700: '#123244',
          800: '#0E2736',
          900: '#0A1C26',
        },
      },
      fontFamily: {
        display: ['var(--font-syne)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-source)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(2.75rem, 8vw, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '700' }],
        'title': ['clamp(1.75rem, 4vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      maxWidth: {
        measure: '38rem',
        site: '72rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
export default config
