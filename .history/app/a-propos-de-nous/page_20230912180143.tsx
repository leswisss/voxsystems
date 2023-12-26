"use client";

import { useEffect, useState } from "react"
import { AboutContent, AboutHero, Preloader } from '@/components'

const AboutUsPage = () => {
  return (
    <>
      <Preloader/>
      <AboutHero />
      <AboutContent />
    </>
  )
}

export default AboutUsPage