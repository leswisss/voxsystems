"use client";

import React, { useEffect } from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/abouthero.jpg"
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
      <div className="ahero__image" style={{back}}>
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
      </div>
    </section>
  )
}

export default AboutHero