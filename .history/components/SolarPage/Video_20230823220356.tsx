"use client";

import React, { useEffect, useRef } from "react";
import { VideoJsProps } from "@/types";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css"
import "../../styles/SolarPage/solarvideo.scss";


interface VideoProps {
  options: VideoJsProps;
  themeName?: string;
  // onPlayerReady: (play: () => void) => void;
}

const Video = ({ options, themeName="sea" }: VideoProps) => {
  const videoRef = useRef(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    const player = playerRef.current;

    if (!player) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      playerRef.current = videojs(videoElement, options);   
      playerRef.current.con
    };

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [options, videoRef, playerRef])
  return (
    <div data-vjs-player>
      <video ref={videoRef} className={`video-js vjs-theme-${themeName}`} />
    </div>
  )
}

export default Video