"use client";

import React from "react";
import { CldVideoPlayer } from "next-cloudinary";
import "../../styles/SolarPage/solarvideo.scss";

const VideoJS = () => {
  return (
    <section className="solar__video">
      <div className="container solar__video-container">
        <CldVideoPlayer
          id="s-video"
          width={1000}
          height={480}
          src="video_fqrqwr"

          transformation={{
            width: 1000,
            height: 480,
            crop: 'fill',
            gravity: 'auto'
          }}
        />
      </div>
    </section>
  );
};

export default VideoJS;

//src="video_fqrqwr"
