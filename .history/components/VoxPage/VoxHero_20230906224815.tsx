"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import "../../styles/VoxPage/voxhero.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VOX from "../../public/images/voxhero.jpg";
import { OpacityAnim } from "@/animations";
import { Icon } from "@iconify/react";
import arrowUpBroken from "@iconify/icons-solar/arrow-up-broken";
import VOX2 from "../../public/images/voxhero2.jpg";
import VOX3 from "../../public/images/voxhero3.jpg";

const VoxHero = () => {
  const [activeBack, setActiveBack] = useState(0);
  const textRef = [0, 1, 2, 3, 4, 5].map(() => useRef(null));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBack((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [activeBack]);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();

    const tl2 = gsap.timeline();

    tl2
      .to(textRef[0].current, { y: "0%", duration: 1, ease: "power4" })
      .to(textRef[1].current, { y: "0%", duration: 1, ease: "power4" }, 0)
      .to(textRef[2].current, { y: "0%", duration: 1, ease: "power4" }, 0)
      .to(textRef[3].current, { y: "0%", duration: 1, ease: "power4" }, 0)
      .to(textRef[4].current, { x: "0%", duration: 1, ease: "power4" }, 0)
      .to(textRef[5].current, { x: "0%", duration: 1, ease: "power4" }, 0.5)
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
          style={{
            opacity: activeBack === 1 ? 1 : 0,
            transition: "all 0.7s linear",
          }}
        />
        <Image
          src={VOX3}
          fill
          alt="Background Image"
          quality={100}
          placeholder="blur"
          sizes="100vw"
          style={{
            opacity: activeBack === 0 ? 1 : 0,
            transition: "all 0.7s linear",
          }}
        />
      </div>
      <div className="container vox__hero-container">
        <div className="vox__hero-slogan">
          <div className="vox__overflow">
            <span ref={textRef[0]} className="v-automatisez">
              AUTOMATISEZ
            </span>{" "}
            <span ref={textRef[1]}>VOTRE</span>
          </div>
          <div className="vox__overflow">
            <span ref={textRef[2]}>MAISON SIMPLIFIEZ</span>
          </div>
          <div className="vox__overflow">
            <span ref={textRef[3]}>VOTRE VIE</span>
          </div>
          <div className="vox__overflow-mobile">
            <p ref={textRef[4]}>
              <span>AUTOMATISEZ</span> VOTRE MAISION SIMPLIFIER VOTRE VIE
            </p>
          </div>
        </div>
        <div className="vox__hero-text" ref={textRef[5]}>
          <p>
            Laissez-nous vous aider à simplifier votre routine quotidienne et à
            apporter de la facilité et commodité à votre vie.
          </p>
        </div>
        <MotionPathHelper.div className="vox__explore">
          <span>
            EXPLORE <Icon icon={arrowUpBroken} />
          </span>
        </MotionPathHelper.div>
      </div>
    </section>
  );
};

export default VoxHero;
