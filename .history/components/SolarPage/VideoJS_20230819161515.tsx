"use client";

import React from 'react'


const VideoJS = ({options, themeName="sea"}: VideoProps) => {
  const videoRef = useRef(null);
  const playerRef = useRef<Player>(null);

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
    <div style={{position: "relative"}} className="container">
      <video ref={videoRef} className={`vjs-theme-${themeName}`}/>
    </div>
  )
}

export default VideoJS