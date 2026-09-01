import type { Config } from 'tailwindcss'

// The Constellation design is expressed as component classes in app/globals.css,
// where the exact prototype values live. These tokens mirror that palette so any
// utility added later lands on the same five colours and two families.
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Archivo — everything structural
        sans: ['Archivo', 'Helvetica', 'sans-serif'],
        // IBM Plex Mono — every label, meta, caption, kicker, nav
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        ink: '#121110', // page ground
        panel: '#161513', // side panel, detail sheet
        paper: '#ece7dd', // foreground
        accent: 'oklch(0.66 0.18 34)', // focus, kickers, link hover
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
      },
      maxWidth: {
        cv: '860px',
        sheet: '880px',
      },
    },
  },
  plugins: [],
}
export default config
