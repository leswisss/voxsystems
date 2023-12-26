import React from 'react'
import VIDEO from "../../"
import { SolarHero, SolarAbout, VoxContact, SolarServices, VideoJS} from '@/components'


const SolarPage = () => {
  const options = 
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