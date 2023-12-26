"use client";

import "../styles/page.scss"
import { useEffect } from "react";
import { Hero, Vision, Services, OurTeam } from '@/components'

export default function Home() {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])
  return (
    <main className='main'>
      <Hero />
      <Services/>
      <Vision />
      <OurTeam />
    </main>
  )
}
