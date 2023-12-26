

import React from 'react'
import { SolarHero, SolarAbout, VoxContact, SolarServices, VideoJS, Preloader} from '@/components'


const SolarPage = () => {
  return (
    <>
      <SolarHero />
      <SolarAbout />
      <VideoJS />
      <SolarServices />
      <VoxContact email="info@solar.com"/>
    </>
  )
}

export default SolarPage