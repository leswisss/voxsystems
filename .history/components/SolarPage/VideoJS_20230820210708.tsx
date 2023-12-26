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
          width={}
          height={500}
          src="video_fqrqwr"
          
        />
      </div>
    </section>
  );
};

export default VideoJS;

//src="video_fqrqwr"
