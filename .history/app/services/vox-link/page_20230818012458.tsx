import React from 'react'
import { VoxHero, VoxAbout, VoxParallax, VoxServices, VoxContact } from '@/components'

const VoxPage = () => {
  return (
    <>
      <VoxHero />
      <VoxAbout />
      <VoxParallax />
      <VoxServices />
      <VoxContact email="info@solar.com"/>
    </>
  )
}

export default VoxPage