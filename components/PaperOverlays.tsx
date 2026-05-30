// Global print-shop overlays: fine grain layer + four registration/crop marks.
// The uneven paper tone is handled by body::before in globals.css.
export default function PaperOverlays() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <span className="crop tl" aria-hidden="true" />
      <span className="crop tr" aria-hidden="true" />
      <span className="crop bl" aria-hidden="true" />
      <span className="crop br" aria-hidden="true" />
    </>
  )
}
