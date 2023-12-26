"use client";

import { useEffect, useState } from "react";
import { TeamHero, TeamHolder, Testimonial, TeamContact, Preloader } from '@/components'

const LaTeam = () => {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading2(false)
    }, 1500)    

    return () => {
      clearTimeout(timeout)
    }
  }, [])
  
  return (
    <>
      <TeamHero />
      <TeamHolder />
      <Testimonial />
      <TeamContact />
    </>
  )
}

export default LaTeam