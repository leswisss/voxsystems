"use client";

import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css"
import "../../styles/SolarPage/solarvideo.scss";

const VideoJS = ({ options, themeName="sea" }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const player = playerRef.current;

    if (!player) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      playerRef.current = videojs(videoElement, options)
    };

    return () => {
      if (player) {
        player.dispose();
      }
    }
  }, [options, videoRef, playerRef])
  return (
    <section className="solar__video">
      <div className="container solar__video-container">
        {/* <video controls width="100%">
          <source src="https://res.cloudinary.com/dl6xz3hu4/video/upload/v1692383585/solar_installation.mp4" type="video/mp4"></source>
          <source src="https://res.cloudinary.com/dl6xz3hu4/video/upload/q_auto/vc_vp9/solar_installation.webm?_s=vp-1.9.4" type="video/webm"></source>
        </video> */}
      </div>
    </section>
  );
};

export default VideoJS;
