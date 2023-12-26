import React from 'react'
import { SolarHero, SolarAbout, VoxContact, SolarServices, VideoJS} from '@/components'


const SolarPage = () => {
  const videoJsOptions = {
    controls: true,
    sources : [{
      src: "../../../public/images/video.mp4",
      type: "video/mp4"
    }]
  } 
  return (
    <>
      <SolarHero />
      <SolarAbout />
      <VideoJS options={videoJsOptions} themeName=''/>
      <SolarServices />
      <VoxContact email="info@solar.com"/>
    </>
  )
}

export default SolarPage