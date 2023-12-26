"use client";

import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image"
import BACK from "../../public/images/abouthero.jpg"
import "../../styles/AboutPage/abouthero.scss"

const AboutHero = () => {
  const textRef = [0, 1, 2, 3].map(() => useRef(null));
  const background = useRef(null)

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()

    gsap.registerPlugin(ScrollTrigger)

    const tl2 = gsap.timeline();
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: background.current,
        start: "top top",
        end: "top+=600px top",
        scrub: 0.3,
      }
    });

    tl
      .to(backImage[0].current, {objectPosition: "0% 50%"})

    tl2
      .to(textRef[0].current, { y: "0%", duration: 1, ease: "power4" })
      .to(textRef[1].current, { y: "0%", duration: 1, ease: "power4" }, 0)
      .to(textRef[2].current, { y: "0%", duration: 1, ease: "power4" }, 0)
  }, [])

  return (
    <section className="about__hero">
      <div className="ahero__image" >
        <Image src={BACK} fill alt="Background Image" quality={100} placeholder="blur" sizes="100vw"/>
      </div>
      <div className="ahero__overlay"></div>
      <div className="ahero__header">
        <div className="ahero__overflow">
          <h3 ref={textRef[0]}>L'INNOVATION</h3>
        </div>
        <div className="ahero__overflow">
          <h3 ref={textRef[1]}>CAMEROUNAISE POUR UN MONDE</h3>
        </div>
        <div className="ahero__overflow">
          <h3 ref={textRef[2]}>MEILLEUR</h3>
        </div>
        <div className="ahero__overflow">
          <h3 ref={textRef[3]}>L'INNOVATION CAMEROUNAISE POUR UN MONDE MEILLEUR</h3>
        </div>
      </div>
    </section>
  )
}

export default AboutHero