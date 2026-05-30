import type { Config } from 'tailwindcss'

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
        // Anton — display / poster headlines + big numerals
        poster: ['Anton', 'Impact', 'sans-serif'],
        // Archivo — UI / labels / project titles
        grot: ['Archivo', 'system-ui', 'sans-serif'],
        // Newsreader — editorial body serif
        serif: ['Newsreader', 'Georgia', 'serif'],
        // Space Mono — technical labels
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        paper: {
          DEFAULT: '#ece2cd', // warm cream stock
          2: '#e4d8bd', // panel / card fill
          dk: '#ddcfb0', // deeper paper tone
        },
        ink: {
          DEFAULT: '#1c1712', // warm near-black
          soft: '#4a4136', // secondary body
          mute: '#8a7d68', // captions / meta
        },
        red: {
          DEFAULT: '#c5341b', // vermillion — the ONE accent
          dk: '#a02611', // accent text on light bg
        },
        led: '#4fae6a', // live/online status dot only
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
      maxWidth: {
        plakat: '1240px',
      },
      animation: {
        // ticker marquee (translateX 0 -> -50% over 38s)
        ticker: 'ticker 38s linear infinite',
        pulse: 'pulse 1.8s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        pulse: {
          '50%': { opacity: '0.35' },
        },
      },
    },
  },
  plugins: [],
}
export default config
