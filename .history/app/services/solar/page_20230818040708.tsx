"use client";

import React, {useEffect} from 'react'
import { SolarHero, SolarAbout, VoxContact, SolarServices } from '@/components'

const SolarPage = () => {
  
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])
  return (
    <>
      <SolarHero />
      <SolarAbout />
      <SolarServices />
      <VoxContact email="info@solar.com"/>
    </>
  )
}

export default SolarPage