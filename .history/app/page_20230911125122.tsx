"use client";

import "../styles/page.scss";
import { useEffect, useState } from "react";
import images
import { AnimatePresence } from "framer-motion";
import { Hero, Vision, Services, OurTeam, Preloader } from "@/components";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = document.querySelector('back-image')
 
    image.onload()

    
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
