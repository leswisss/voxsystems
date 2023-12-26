"use client";

import React from "react";
// import VIDEO from "../../public/images/video.webm"
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
          <source src="https://res.cloudinary.com/dl6xz3hu4/video/upload/v1692383585/solar_installation.mp4" type="video/mp4"></source>
        </video>
      </div>
    </section>
  );
};

export default VideoJS;
