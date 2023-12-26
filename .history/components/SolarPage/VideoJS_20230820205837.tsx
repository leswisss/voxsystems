"use client";

import React from 'react'
import { CldVideoPlayer } from 'next-cloudinary';
import "../../styles/SolarPage/solarvideo.scss"

const VideoJS = () => {
  return (
    <section className="solar__video">
      <div className="container solar__video-container">
        <CldVideoPlayer id="s-video" width={1280} height={420} src="video_fqrqwr" transformation={{
    width: 500,
    height: 500,
    crop: 'fill',
    gravity: 'auto'
  }}/>
      </div>
    </section>
  )
}

export default VideoJS

//src="video_fqrqwr"