import React from 'react'
import { CldVideoPlayer } from 'next-cloudinary';

const VideoJS = () => {
  return (
    <section className="solar__video">
      <div className="container solar__video-container">
        <CldVideoPlayer width="100%" height={540} src="video_fqrqwr"/>
      </div>
    </section>
  )
}

export default VideoJS