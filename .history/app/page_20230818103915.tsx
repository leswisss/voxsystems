"use client";

import "../styles/page.scss"
import { Hero, Vision, Services, OurTeam } from '@/components'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export default function Home() {
  return (
    // <ReactLenis root>
    <main className='main'>
      <Hero />
      <Services/>
      <Vision />
      <OurTeam />
    </main>
    </ReactLenis>
  )
}
