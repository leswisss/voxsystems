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
      <Preloader state2={loading2} state={loading}/>
      <SolarHero setState={setLoading} state={loading2} state2={loading}/>
      <SolarAbout />
      {/* <VideoJS /> */}
      <SolarServices />
      <VoxContact email="info@solar.com"/>
    </>
  )
}

export default SolarPage