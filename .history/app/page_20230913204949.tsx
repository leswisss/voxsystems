"use client";

import "../styles/page.scss";
import { useEffect, useState } from "react";
import { Hero, Vision, Services, OurTeam, Preloader } from "@/components";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [isInitialVisit, setIsInitialVisit] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading2(false);
    }, 3000);

    const isInitial = localStorage.getItem("isInitialVisit");

    if (isInitial === null) {
      localStorage.setItem("isInitialVisit", "true");
    } else {
      setIsInitialVisit(false);
    }

    const handleBeforeUnload = () => {
      localStorage.removeItem("isInitialVisit")
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      // clearTimeout(timeout);
      window.removeEventListener("beforeunload", handleBeforeUnload)
    };
  }, []);

  return (
    <>
      <Preloader state2={loading2} state={loading} isInitial={isInitialVisit} />
      <main className="main">
        <Hero setState={setLoading} state={loading2} state2={loading} />
        <Services />
        <Vision />
        <OurTeam />
      </main>
    </>
  );
}
