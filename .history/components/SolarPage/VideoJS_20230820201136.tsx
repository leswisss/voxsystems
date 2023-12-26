"use client";

import React from 'react'
import { CldVideoPlayer } from 'next-cloudinary';
import "../../styles/SolarPage/solarvideo.scss"

const VideoJS = () => {
  return (
    <section className={}>
      <div className="container solar__video-container">
        <CldVideoPlayer id="solar__video" width={1280} height={720} src="samples/sea-turtle"/>
      </div>
    </section>
  )
}

export default VideoJS

//src="video_fqrqwr"