"use client";

import { useEffect, useState } from "react"
import { AboutContent, AboutHero, Preloader } from '@/components'

const AboutUsPage = () => {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading2(false)
    }, 1500)    

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      <Preloader state2={loading2} state={loading}/>
      <AboutHero />
      <AboutContent />
    </>
  )
}

export default AboutUsPage