import React from 'react'
import { SolarHero, SolarAbout, VoxContact, SolarServices } from '@/components'
import LocomotiveScroll from 'locomotive-scroll';

const SolarPage = () => {



  

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