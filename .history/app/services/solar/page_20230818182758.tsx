import React from 'react'
import video from "../../../public/images/video.mp4"
import { SolarHero, SolarAbout, VoxContact, SolarServices, VideoJS} from '@/components'


const SolarPage = () => {
  const videoJsOptions = {
    controls: true,
    sources : [{
      src: video,
      type: "video/mp4"
    }]
  } 
  return (
    <>
      <SolarHero />
      <SolarAbout />
      <VideoJS options={videoJsOptions}/>
      <SolarServices />
      <VoxContact email="info@solar.com"/>
    </>
  )
}

export default SolarPage