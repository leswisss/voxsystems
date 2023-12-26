"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "../../styles/VoxPage/voxhero.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VOX from "../../public/images/voxhero.jpg";
import { Icon } from "@iconify/react";
import arrowUpBroken from "@iconify/icons-solar/arrow-up-broken";
import VOX2 from "../../public/images/voxhero2.jpg";
import VOX3 from "../../public/images/voxhero3.jpg";

const VoxHero = () => {
  const [activeBack, setActiveBack] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBack((prev) => 
        prev === 0 ? 1 : 0
      )
    }, 5000)

    
  }, [activeBack])

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <section className="vox__hero">
      <div className="background__images">
        <Image
          src={VOX2}
          fill
          alt="Background Image"
          quality={100}
          placeholder="blur"
          sizes="100vw"
          style={{opacity: activeBack === 1 ? 1 : 0, transition: "all 1s linear"}}
        />
        <Image
          src={VOX3}
          fill
          alt="Background Image"
          quality={100}
          placeholder="blur"
          sizes="100vw"
          style={{opacity: activeBack === 0 ? 1 : 0, transition: "all 1s linear"}}
        />
      </div>
      <div className="container vox__hero-container">
        <div className="vox__hero-slogan">
          <div className="vox__overflow">
            <span className="v-automatisez">AUTOMATISEZ</span>{" "}
            <span>VOTRE</span>
          </div>
          <div className="vox__overflow">
            <span>MAISON SIMPLIFIEZ</span>
          </div>
          <div className="vox__overflow">
            <span>VOTRE VIE</span>
          </div>
          <div className="vox__overflow-mobile">
            <p>
              <span>AUTOMATISEZ</span> VOTRE MAISION SIMPLIFIER VOTRE VIE
            </p>
          </div>
        </div>
        <div className="vox__hero-text">
          <p>
            Laissez-nous vous aider à simplifier votre routine quotidienne et à
            apporter de la facilité et commodité à votre vie.
          </p>
        </div>
        <div className="vox__explore">
          <span>
            EXPLORE <Icon icon={arrowUpBroken} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default VoxHero;
