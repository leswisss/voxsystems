"use client";

import "../styles/page.scss";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Hero, Vision, Services, OurTeam, Preloader } from "@/components";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading2(false)
    }, 2500)    

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>

      <Preloader state2={loading2} state={loading}/>


      <main className="main">
        <Hero setState={setLoading} state={loading2}/>
        <Services />
        <Vision />
        <OurTeam />
      </main>
    </>
  );
}
