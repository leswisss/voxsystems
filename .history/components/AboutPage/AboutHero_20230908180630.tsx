"use client";

import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { motion } from "framer-motion"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image"
import BACK from "../../public/images/abouthero.jpg"
import "../../styles/AboutPage/abouthero.scss"

const AboutHero = () => {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <section className="about__hero">
      <div className="ahero__image" >
        <Image src={BACK} fill alt="Background Image" quality={100} placeholder="blur" sizes="100vw"/>
      </div>
      <div className="ahero__overlay"></div>
      <div className="ahero__header">
        <div className="ahero__overflow">
          <h3>L'INNOVATION</h3>
        </div>
        <div className="ahero__overflow">
          <h3>CAMEROUNAISE POUR UN MONDE</h3>
        </div>
        <div className="ahero__overflow">
          <h3>MEILLEUR</h3>
        </div>
        <div className="ahero__overflow">
          <h3>L'INNOVATION CAMEROUNAISE POUR UN MONDE MEILLEUR</h3>
        </div>
      </div>
    </section>
  )
}

export default AboutHero