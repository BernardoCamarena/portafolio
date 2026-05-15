import { AppShell } from '@/components/AppShell'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'
import { Marquee } from '@/components/ui/Marquee'
import { Clock } from '@/components/ui/Clock'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { MARQUEE_ITEMS } from '@/lib/constants'

export default function Home() {
  return (
    <>
      <AppShell>
        <Nav />
        <main className="shell">
          <Hero />
          <Marquee items={MARQUEE_ITEMS} />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Clock />
      </AppShell>
      <CustomCursor />
      <RevealOnScroll />
    </>
  )
}
