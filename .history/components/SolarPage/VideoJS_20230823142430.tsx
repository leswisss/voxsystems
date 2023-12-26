"use client";

import React, { useRef, useState } from "react";
import Video from "./Video";
import { Icon } from "@iconify/react";
import playIcon from "@iconify/icons-mdi/play";
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

  const [activeImage, ]
  const buttonRef = useRef(null)

  return (
    <section className="solar__video">
      <div className="container solar__video-container">
        <div className="vvideo__container">
          <Video options={VideoJsOptions} />
          <div className="vvideo__cover">
            <div className="vv-content">
            <div className="text__content">
              <div className="v-overflow">
                <p>
                  VIVRE DE MANIÈRE <span>DURABLE</span>
                </p>
              </div>
              <div className="v-overflow">
                <p>AVEC L'ÉNERGIE SOLAIRE</p>
              </div>
            </div>
            <div className="vv-play">
              <Icon icon={playIcon} />
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoJS;
