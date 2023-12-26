"use client";

import "../styles/page.scss";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Hero, Vision, Services, OurTeam, Preloader } from "@/components";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll('img')
    let loadedImages = 0

    
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
