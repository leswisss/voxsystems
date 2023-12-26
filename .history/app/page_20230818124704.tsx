"use client";

import "../styles/page.scss"
import { useEffect } from "react";
import { Hero, Vision, Services, OurTeam } from '@/components'

export default function Home() {
  return (
    <main className='main'>
      <Hero />
      <Services/>
      <Vision />
      <OurTeam />
    </main>
  )
}
