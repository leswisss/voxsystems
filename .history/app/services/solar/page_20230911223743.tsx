"use client";

import { useEffect, useState } from "react";
import { SolarHero, SolarAbout, VoxContact, SolarServices, VideoJS, Preloader} from '@/components'


const SolarPage = () => {
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
      <Preloader/>
      <SolarHero />
      <SolarAbout />
      <VideoJS />
      <SolarServices />
      <VoxContact email="info@solar.com"/>
    </>
  )
}

export default SolarPage