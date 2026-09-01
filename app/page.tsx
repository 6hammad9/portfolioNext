import Link from 'next/link'
import Constellation from '@/components/Constellation'

export default function Home() {
  return (
    <>
      {/* The map is a client component, so none of its text is in the served
          HTML. This link is, which gives crawlers and fetch-based tools a path
          to the server-rendered copy at /cv. Visible on keyboard focus. */}
      <Link className="sr-only focus:not-sr-only" href="/cv">
        Read the plain-text CV and project write-ups
      </Link>
      <Constellation />
    </>
  )
}
