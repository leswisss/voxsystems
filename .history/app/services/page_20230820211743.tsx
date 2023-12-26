"use client";

import React from "react";
import { CldVideoPlayer } from "next-cloudinary";

const ServicesPage = () => {
  return (
    <div className="container solar__video-container">
        <CldVideoPlayer
          id="s-video"
          width={1280}
          height={480}
          src="video_fqrqwr"

          transformation={{
            width: 1280,
            height: 480,
            crop: 'fill',
            gravity: 'auto'
          }}
        />
      </div>
  )
}

export default ServicesPage