"use client";

import React from "react";
import VIDEO from "../../public/images"
import { CldVideoPlayer } from "next-cloudinary";
import "../../styles/SolarPage/solarvideo.scss";

const VideoJS = () => {
  return (
    <section className="solar__video">
      <div className="container solar__video-container">
        <CldVideoPlayer
          id="s-video"
          width={1280}
          height={480}
          src="video_fqrqwr"
        />
      </div>
    </section>
  );
};

export default VideoJS;
