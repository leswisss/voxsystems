"use client";

import { useEffect, useState } from "react";
import { VoxHero, VoxAbout, VoxParallax, VoxServices, VoxContact, } from '@/components'

const VoxPage = () => {
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
      <VoxHero />
      <VoxAbout />
      <VoxParallax />
      <VoxServices />
      <VoxContact email="info@voxlink.com"/>
    </>
  )
}

export default VoxPage