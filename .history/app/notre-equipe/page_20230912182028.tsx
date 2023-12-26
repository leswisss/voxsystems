"use client";

import { useEffect, useState } from "react";
import { TeamHero, TeamHolder, Testimonial, TeamContact, Preloader } from '@/components'

const LaTeam = () => {
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