"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import SOLAR from "../../public/images/solar.jpg";
import SOLAR2 from "../../public/images/solar2.jpg";
import "../../styles/SolarPage/solarhero.scss";

const SolarHero = ({
  setState,
  state,
  state2,
}: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  state: boolean;
  state2: boolean;
}) => {
  const heroImages = [SOLAR, SOLAR2];
  const [activeImage, setActiveImage] = useState(0);
  const heroRefs = [0, 1, 2, 3, 4, 5, 6, 7].map(() => useRef(null));

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();

    gsap.registerPlugin(ScrollTrigger);

    const tl2 = gsap.timeline();

    tl2
      .to(heroRefs[0].current, { y: "0%", duration: 1, ease: "power4" }, 0.1)
      .to(heroRefs[1].current, { y: "0%", duration: 1, ease: "power4" }, 0.1)
      .to(heroRefs[2].current, { y: "0%", duration: 1, ease: "power4" }, 0.1)
      .to(heroRefs[3].current, { y: "0%", duration: 1, ease: "power4" }, 0.5)
      .to(heroRefs[4].current, { y: "0%", duration: 1, ease: "power4" }, 1)
      .to(heroRefs[5].current, { y: "0%", duration: 1, ease: "power4" }, 0.5)
      .to(heroRefs[6].current, { opacity: 1, duration: 2, ease: "power4" }, 1.5)
      .to(heroRefs[7].current, { y: "0%", duration: 1, ease: "power4" }, 2);

    !(!state && !state2) ? tl2.pause() : tl2.play();
  }, [state, state2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="solar">
      <div className="container solar-hero__container">
        <div className="s-hero__text">
          <div className="s-hero__header">
            <div className="sh__overflow">
              <p ref={heroRefs[0]}>
                Investissez dans le <span>solaire</span>
              </p>
            </div>
            <div className="sh__overflow">
              <p ref={heroRefs[1]}>pour un avenir radieux</p>
            </div>
            <div className="sh__over-mobile">
              <p ref={heroRefs[2]}>
                Investissez dans le <span>solaire</span> pour un avenir radieux
              </p>
            </div>
          </div>
          <div className="sh__desc">
            <div className="sh__overflow">
              <p ref={heroRefs[3]}>
                Nous transformons l'accès à l'énergie renouvelable avec des
              </p>
            </div>
            <div className="sh__overflow">
              <p ref={heroRefs[4]}>solutions simples et puissantes.</p>
            </div>
            <div className="sh__over-mobile">
              <p ref={heroRefs[5]}>
                Nous transformons l'accès à l'énergie renouvelable avec des
                solutions simples et puissantes.
              </p>
            </div>
          </div>
          <div className="sh__cta" ref={heroRefs[6]}>
            <div className="sh__overflow">
              <Link href="/">Contactez nous</Link>
            </div>
          </div>
        </div>

        <div className="s-hero__image" ref={heroRefs[7]}>
          <Image
            src={heroImages[0]}
            alt="Solar Energy"
            placeholder="blur"
            onLoadingComplete={(setState(false)}
            fill={true}
            sizes="100%"
            quality={100}
            style={{ opacity: activeImage === 0 ? 1 : 0 }}
          />
          <Image
            src={heroImages[1]}
            alt="Solar Energy"
            placeholder="blur"
            fill
            sizes="100%"
            quality={100}
            style={{ opacity: activeImage === 1 ? 1 : 0 }}
          />
        </div>
      </div>
    </section>
  );
};

export default SolarHero;
