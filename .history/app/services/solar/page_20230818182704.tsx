import React from 'react'
import video from "../../../public/images/video.mp4"
import { SolarHero, SolarAbout, VoxContact, SolarServices, VideoJS} from '@/components'


const SolarPage = () => {
  const videoJsOptions = {
    controls: true,
    sou
  } 
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