"use client";

import React, { useState, useEffect, useRef } from 'react'
import videojs from 'video.js';
import "video.js/dist/video-js.css"



const VideoJS = ({options, themeName="sea"}) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const player = playerRef.current;

    if (!player) {
      const videoElement = videoRef.current;

      if (!videoElement) return;

      playerRef.current = videojs(videoElement, options)
    }

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    }
  }, [options, videoRef, playerRef])
  return (
    <div>
      <video ref={videoRef} className={`container vjs-theme-${themeName}`}/>
    </div>
  )
}

export default VideoJS