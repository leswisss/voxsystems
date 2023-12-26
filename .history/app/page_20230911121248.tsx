"use client";

import "../styles/page.scss"
import { useEffect, useState } from "react";
import {AnimatePresence} from "framer-motion"
import { useRouter } from 'next/router'
import { Hero, Vision, Services, OurTeam, Preloader } from '@/components'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      setLoading(true)
    }

    const handleRouteChangeComplete = () => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router.events])

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
