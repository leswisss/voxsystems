"use client";

import React from 'react'
import { CldVideoPlayer } from 'next-cloudinary';
import "../../styles/SolarPage/solarvideo.scss"

const VideoJS = () => {
  return (
    <div className="container solar__video-container">
      <CldVideoPlayer width={} height={540} src="video_fqrqwr"/>
    </div>
  )
}

export default VideoJS