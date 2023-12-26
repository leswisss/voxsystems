import React from 'react'
import { SolarHero, SolarAbout, VoxContact, SolarServices, VideoJS} from '@/components'


const SolarPage = () => {
  
  return (
    <>
      <SolarHero />
      <SolarAbout />
      {/* <VideoJS options={videoJsOptions} /> */}
      <SolarServices />
      <VoxContact email="info@solar.com"/>
    </>
  )
}

export default SolarPage