"use client";

import React, { useState, useEffect, useRef } from 'react'
import videojs from 'video.js';
import "video.js/dist/video-js.css"

const VideoJS = ({options, themeName="sea"}) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  
  return (
    <div>VideoJS</div>
  )
}

export default VideoJS