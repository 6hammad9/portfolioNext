import Masthead from '@/components/Masthead'
import PlakatNav from '@/components/PlakatNav'
import Hero from '@/sections/Hero'
import Ticker from '@/components/Ticker'
import About from '@/sections/About'
import Capabilities from '@/sections/Capabilities'
import Projects from '@/sections/Projects'
import Experience from '@/sections/Experience'
import Education from '@/sections/Education'
import SkillsMatrix from '@/sections/SkillsMatrix'
import Meta from '@/sections/Meta'
import Contact from '@/sections/Contact'
import Footer from '@/components/Footer'
import Reveals from '@/components/Reveals'

export default function Home() {
  return (
    <>
      <Masthead />
      <PlakatNav />
      <Hero />
      <Ticker />
      <About />
      <Capabilities />
      <Education />
      <Projects />
      <Experience />
      <SkillsMatrix />
      <Meta />
      <Contact />
      <Footer />
      <Reveals />
    </>
  )
}
