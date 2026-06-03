import { ImageResponse } from 'next/og'

// Branded "Plakat" cover used as the link-preview (Open Graph) image, so
// pasting the site anywhere shows the cover — not the headshot.
// Edge runtime: avoids the Windows `fileURLToPath` bug in @vercel/og's node
// build, and works on Vercel. Fonts are fetched (edge can't read from fs).
export const runtime = 'edge'
export const alt = 'Raja Hammad Naseer — KI- & Robotik-Systeme'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const ANTON_URL = 'https://raw.githubusercontent.com/google/fonts/main/ofl/anton/Anton-Regular.ttf'
const MONO_URL = 'https://raw.githubusercontent.com/google/fonts/main/ofl/spacemono/SpaceMono-Regular.ttf'

const ink = '#1c1712'
const paper = '#ece2cd'
const red = '#c5341b'
const redDk = '#a02611'
const mute = '#8a7d68'

export default async function Image() {
  const [anton, mono] = await Promise.all([
    fetch(ANTON_URL).then((r) => r.arrayBuffer()),
    fetch(MONO_URL).then((r) => r.arrayBuffer()),
  ])

  // one stacked name line with the vermillion riso offset
  const NameLine = (text: string) => (
    <div style={{ position: 'relative', display: 'flex', lineHeight: 1 }}>
      <span style={{ position: 'absolute', left: 5, top: 4, color: red }}>{text}</span>
      <span style={{ color: ink }}>{text}</span>
    </div>
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: paper,
          color: ink,
          fontFamily: 'Space Mono',
          padding: 64,
          position: 'relative',
        }}
      >
        {/* printed-page frame */}
        <div style={{ position: 'absolute', top: 26, left: 26, right: 26, bottom: 26, border: `2px solid ${ink}`, display: 'flex' }} />

        {/* masthead row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 23, textTransform: 'uppercase', letterSpacing: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: 18, height: 18, background: red, marginRight: 14, display: 'flex' }} />
            <span>R. H. Naseer</span>
          </div>
          <span style={{ color: mute }}>Portfolio · Ilmenau, DE</span>
        </div>

        {/* kicker */}
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 46, fontSize: 25, textTransform: 'uppercase', color: redDk, letterSpacing: 2 }}>
          <div style={{ width: 50, height: 16, background: red, marginRight: 18, display: 'flex' }} />
          KI / ML · Robotik · ROS2 · Computer Vision
        </div>

        {/* name */}
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 22, fontFamily: 'Anton', fontSize: 99, textTransform: 'uppercase', letterSpacing: 1 }}>
          {NameLine('Raja')}
          {NameLine('Hammad')}
          {NameLine('Naseer')}
        </div>

        {/* role */}
        <div style={{ display: 'flex', marginTop: 'auto', fontSize: 26, color: ink }}>
          M.Sc. Computer &amp; Systems Engineering · Fullstack + AI
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Anton', data: anton, style: 'normal', weight: 400 },
        { name: 'Space Mono', data: mono, style: 'normal', weight: 400 },
      ],
    }
  )
}
