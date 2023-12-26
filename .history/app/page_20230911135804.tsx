"use client";

import "../styles/page.scss";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Hero, Vision, Services, OurTeam, Preloader } from "@/components";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {

    }, 2500)    
    
  }, [])

  return (
    <>
      {loading && (
        <AnimatePresence mode="wait">
          <Preloader />
        </AnimatePresence>
      )}

      <main className="main">
        <Hero setState={setLoading}/>
        <Services />
        <Vision />
        <OurTeam />
      </main>
    </>
  );
}
