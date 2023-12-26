import React from 'react'
import { SolarHero, SolarAbout, VoxContact, SolarServices } from '@/components'

const SolarPage = () => {
  return (
    <>
      <SolarHero />
      <SolarAbout />
      <SolarServices/>
      <VoxContact email="info@solar.com"/>
    </>
  )
}

export default SolarPage