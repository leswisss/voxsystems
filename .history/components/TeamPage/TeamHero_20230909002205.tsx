"use client";

import React, { useEffect, useRef } from "react";
import IMAGE from "../../public/images/thero.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/TeamPage/teamhero.scss"
import Image from "next/image";

const TeamHero = () => {

  const heroRefs = [0,1,2].map(() => useRef(null))
  const imageRef = useRef(null)


  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline()

    tl
      .to(heroRefs[0].current, {y: "0%", duration: 1, ease: "power4"})
      .to(heroRefs[1].current, {y: "0%", duration: 1, ease: "power4"}, 0.5)
      .to(heroRefs[2].current, {y: "0%", duration: 1, ease: "power4"}, 1)

    gsap.from(imageRef.current, {
    scrollTrigger: {
      trigger: imageRef.current,
      start: "top top",
      end: "top+=600px top",
      scrub: 0.3,
    },

    
    })

  }, []);

  return (
    <section className="team__hero">
      <div className="t-hero__image">
        <Image src={IMAGE} fill alt="Background Image" quality={100} placeholder="blur" sizes="100vw" ref={imageRef}/>
      </div>

      <div className="thero__text">
        <div className="t-hero__overflow">
          <h3 ref={heroRefs[0]}>RENCONTREZ</h3>
        </div>
        <div className="t-hero__overflow">
          <h3 ref={heroRefs[1]}>NOTRE ÉQUIPE</h3>
        </div>
        <div className="t-hero__overflow">
          <p ref={heroRefs[2]}>
            Nous travaillons ensemble pour atteindre nos objectifs et sommes
            engagés a offrir l'excellence dans tout ce que nous faisons.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
