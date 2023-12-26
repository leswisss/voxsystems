"use client";

import "../styles/page.scss"
import { useEffect, useState } from "react";
import {AnimatePresence} from "framer-motion"
import { useRouter } from 'next/router'
import { Hero, Vision, Services, OurTeam, Preloader } from '@/components'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

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
