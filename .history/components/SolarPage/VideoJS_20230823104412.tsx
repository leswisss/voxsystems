"use client";

import React from "react";
import VIDEO from "../../public/images/video.mp4"
import { CldVideoPlayer } from "next-cloudinary";
import "../../styles/SolarPage/solarvideo.scss";

const VideoJS = () => {
  return (
    <section className="solar__video">
      <div className="container solar__video-container">
        {/* <CldVideoPlayer
          id="s-video"
          width={1280}
          height={480}
          src="video_fqrqwr"
        /> */}
        <video autoPlay controls loop width="100%">
          <source src={VIDEO} ty></source>
        </video>
      </div>
    </section>
  );
};

export default VideoJS;
