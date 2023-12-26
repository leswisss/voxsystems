"use client";

import "../styles/page.scss";
import { useEffect, useState } from "react";
import imagesLoaded from 'imagesloaded'
import { AnimatePresence } from "framer-motion";
import { Hero, Vision, Services, OurTeam, Preloader } from "@/components";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imgLoad = imagesLoaded(document.querySelector('back-image'))

    imgLoad.on('always', () => {
      setLoading(false)
    })

    
  }, [])

  return (
    <>
      {loading && (
        <AnimatePresence mode="wait">
          <Preloader />
        </AnimatePresence>
      )}

      <main className="main">
        <Hero />
        <Services />
        <Vision />
        <OurTeam />
      </main>
    </>
  );
}
