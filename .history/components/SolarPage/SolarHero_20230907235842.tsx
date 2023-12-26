"use client";

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link'
import Image from 'next/image'
import SOLAR from "../../public/images/solar.jpg"
import SOLAR2 from "../../public/images/solar2.jpg" 
import "../../styles/SolarPage/solarhero.scss"

const SolarHero = () => {
  const heroImages = [SOLAR, SOLAR2]
  const [activeImage, setActiveImage] = useState(0)
  const heroRefs = [0,1,2,3,4,5,6].map(() => useRef(null))

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()


    const tl2 = gsap.timeline();

    tl2
      .to()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) =>  (prev === 0 ? 1 : 0))
    }, 5000)

    return () => clearInterval(interval)
  }, [])
  
  return (
    <section className="solar">
      <div className="container solar-hero__container">
        <div className="s-hero__text">
          <div className="s-hero__header">
            <div className="sh__overflow"><p ref={heroRefs[0]}>Investissez dans le <span>solaire</span></p></div>
            <div className="sh__overflow"><p ref={heroRefs[1]}>pour un avenir radieux</p></div>
            <div className="sh__over-mobile"><p ref={heroRefs[2]}>Investissez dans le <span>solaire</span> pour un avenir radieux</p></div>
          </div>
          <div className="sh__desc">
            <div className="sh__overflow"><p ref={heroRefs[3]}>Nous transformons l'accès à l'énergie renouvelable avec des</p></div>
            <div className="sh__overflow"><p ref={heroRefs[4]}>solutions simples et puissantes.</p></div> 
            <div className="sh__over-mobile"><p ref={heroRefs[2]}>Nous transformons l'accès à l'énergie renouvelable avec des solutions simples et puissantes.</p></div>
          </div>
          <div className="sh__cta">
            <div className="sh__overflow">
              <Link href="/">Contactez nous</Link>
            </div>
          </div>
        </div>

        <div className="s-hero__image" data-scroll data-scroll-speed>
          {
            heroImages.map((image, i) => (
              <Image src={image} alt="Solar Energy" fill={true} sizes='(max-width: 600px) 100%, 100%' key={`si-${i}`} style={{opacity: activeImage === i ? 1 : 0}} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default SolarHero