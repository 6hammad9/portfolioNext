// Faint, site-wide robotics/AI blueprint behind all content. Rendered as a
// tiled SVG <pattern> on an ABSOLUTE layer (scrolls with the page, not fixed —
// so it doesn't parallax/"swim" while scrolling). Reuses the hero motif set.
export default function SiteSchematic() {
  return (
    <div className="site-schematic" aria-hidden="true">
      <svg width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <pattern id="robos" width="780" height="860" patternUnits="userSpaceOnUse">
            {/* neural net — top left of tile */}
            <g transform="translate(50,60)">
              <line x1="20" y1="20" x2="80" y2="6" />
              <line x1="20" y1="20" x2="80" y2="60" />
              <line x1="20" y1="70" x2="80" y2="6" />
              <line x1="20" y1="70" x2="80" y2="60" />
              <line x1="80" y1="6" x2="140" y2="34" />
              <line x1="80" y1="60" x2="140" y2="34" />
              <circle cx="20" cy="20" r="6" />
              <circle cx="20" cy="70" r="6" />
              <circle cx="80" cy="6" r="6" />
              <circle cx="80" cy="60" r="6" />
              <circle cx="140" cy="34" r="7" stroke="#c5341b" strokeWidth={1.6} />
              <text x="0" y="104" fontFamily="monospace" fontSize="13" fill="currentColor" stroke="none">NEURAL NET</text>
            </g>

            {/* quadcopter drone — top right of tile */}
            <g transform="translate(630,130)">
              <rect x="-22" y="-14" width="44" height="28" rx="4" />
              <line x1="-16" y1="-10" x2="-52" y2="-40" />
              <line x1="16" y1="-10" x2="52" y2="-40" />
              <line x1="-16" y1="10" x2="-52" y2="40" />
              <line x1="16" y1="10" x2="52" y2="40" />
              <circle cx="-58" cy="-46" r="16" />
              <circle cx="58" cy="-46" r="16" />
              <circle cx="-58" cy="46" r="16" />
              <circle cx="58" cy="46" r="16" />
              <circle cx="0" cy="0" r="4" stroke="#c5341b" />
              <text x="-26" y="120" fontFamily="monospace" fontSize="13" fill="currentColor" stroke="none">UAV · CAM</text>
            </g>

            {/* reticle — centre of tile */}
            <g transform="translate(400,330)" opacity="0.85">
              <circle cx="0" cy="0" r="22" />
              <path d="M0 -32V-12M0 12V32M-32 0H-12M12 0H32" />
            </g>

            {/* QCar — lower left of tile */}
            <g transform="translate(70,470)">
              <path d="M14 96h172" />
              <path d="M40 96V70q0-6 6-6h22l24-26h54l16 26h20q6 0 6 6v26" />
              <circle cx="64" cy="96" r="20" />
              <circle cx="64" cy="96" r="8" />
              <circle cx="150" cy="96" r="20" />
              <circle cx="150" cy="96" r="8" />
              <rect x="92" y="30" width="26" height="10" rx="2" />
              <g stroke="#c5341b" strokeWidth={1.6}>
                <path d="M6 20h22M6 20v18" />
                <path d="M196 20h-22M196 20v18" />
                <path d="M6 118h22M6 118v-18" />
                <path d="M196 118h-22M196 118v-18" />
              </g>
              <text x="6" y="14" fontFamily="monospace" fontSize="12" fill="#c5341b" stroke="none">QCAR 0.97</text>
            </g>

            {/* control waveform — mid right of tile */}
            <g transform="translate(560,470) scale(2.2)" opacity="0.9">
              <path d="M7 30c5 0 5-14 10-14s5 14 10 14 5-9 10-9" />
              <path d="M7 37h30" />
            </g>

            {/* mobile rover — bottom right of tile */}
            <g transform="translate(580,690)">
              <rect x="0" y="20" width="78" height="34" rx="4" />
              <circle cx="20" cy="58" r="11" />
              <circle cx="58" cy="58" r="11" />
              <path d="M39 20V2" />
              <circle cx="39" cy="-4" r="6" />
              <path d="M52 20v-8h16v8" />
              <path d="M60 12v-8" stroke="#c5341b" />
              <text x="0" y="84" fontFamily="monospace" fontSize="13" fill="currentColor" stroke="none">ROVER · ROS2</text>
            </g>

            {/* gear cluster — bottom left of tile */}
            <g transform="translate(150,720) scale(2.2)">
              <rect x="17" y="17" width="10" height="10" rx="2" />
              <circle cx="11" cy="11" r="5" />
              <circle cx="33" cy="11" r="5" />
              <circle cx="11" cy="33" r="5" />
              <circle cx="33" cy="33" r="5" />
              <path d="M15 15l-2-2M29 15l2-2M15 29l-2 2M29 29l2 2" />
            </g>

            {/* dashed perception connectors */}
            <path d="M210 150C360 220 300 300 400 330" strokeDasharray="5 5" opacity="0.5" />
            <path d="M422 330C520 380 540 420 560 480" strokeDasharray="5 5" opacity="0.5" />
            <path d="M270 560C360 640 460 690 580 700" strokeDasharray="5 5" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#robos)" />
      </svg>
    </div>
  )
}
