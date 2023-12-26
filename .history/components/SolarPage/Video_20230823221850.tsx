"use client";

import React, { useEffect, useRef, useState } from "react";
import { VideoJsProps } from "@/types";
import { Icon } from "@iconify/react";
import playIcon from "@iconify/icons-mdi/play";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
import { motion, AnimatePresence } from "framer-motion";
import cover
import "video.js/dist/video-js.css";
import "../../styles/SolarPage/solarvideo.scss";

interface VideoProps {
  options: VideoJsProps;
  themeName?: string;
}

const Video = ({ options, themeName = "sea" }: VideoProps) => {
  const videoRef = useRef(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    const player = playerRef.current;

    if (!player) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      playerRef.current = videojs(videoElement, options);
    }

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [options, videoRef, playerRef]);

  const [overlay, setOverlay] = useState(true);
  // const [playVideo, setPlayVideo] = useState<(() => void) | null>(null);

  const handlePlayClick = () => {
    setOverlay(false);
    playerRef.current?.play();
  };

  return (
    <>
      <div data-vjs-player>
        <video ref={videoRef} className={`video-js vjs-theme-${themeName}`} />
      </div>
      <AnimatePresence mode="wait">
        {overlay && (
          <motion.div className="vvideo__cover">
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
              <div className="vv-play" onClick={() => handlePlayClick()}>
                <Icon icon={playIcon} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Video;
