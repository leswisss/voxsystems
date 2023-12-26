"use client";

import "../styles/page.scss"
import { useEffect, use } from "react";
import {AnimatePresence} from "framer-motion"
import { Hero, Vision, Services, OurTeam, Preloader } from '@/components'

export default function Home() {
  return (
    <>
    <AnimatePresence mode="wait">
      <Preloader />
    </AnimatePresence>

    <main className='main'>
      <Hero />
      <Services/>
      <Vision />
      <OurTeam />
    </main>
    </>
  )
}
