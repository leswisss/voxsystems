import React from 'react'


const VideoJS = ({options, themeName="sea"}: VideoProps) => {
  return (
    <div style={{position: "relative"}} className="container">
      <video ref={videoRef} className={`vjs-theme-${themeName}`}/>
    </div>
  )
}

export default VideoJS