"use client";

import React from "react";
import Video from "./Video";
import "../../styles/SolarPage/solarvideo.scss";

const VideoJS = () => {
  const VideoJsOptions = {
    controls: true,
    sources: [
      {
        src: "https://res.cloudinary.com/dl6xz3hu4/video/upload/v1692383585/solar_installation.mp4",
        type: "video/mp4",
      },
      {
        src: "https://res.cloudinary.com/dl6xz3hu4/video/upload/q_auto/vc_vp9/solar_installation.webm?_s=vp-1.9.4",
        type: "video/webm",
      },
    ],
  };

  return (
    <section className="solar__video">
      <div className="container solar__video-container">
        <div className="vvideo__container">
          <Video options={VideoJsOptions} />
        </div>
      </div>
    </section>
  );
};

export default VideoJS;
