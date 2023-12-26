import React from 'react'
import { SolarHero, SolarAbout, VoxContact } from '@/components'

const SolarPage = () => {
  return (
    <>
      <SolarHero />
      <SolarAbout />
      <VoxContact email="info@voxlink.com"/>
    </>
  )
}

export default SolarPage