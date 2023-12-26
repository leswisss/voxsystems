"use client";

import React, {useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import PARRALAX from "../../public/images/voxparallax.jpg";
import "../../styles/VoxPage/vparallax.scss";

const VoxParallax = () => {
  const background = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(background.current, {
      scrollTrigger: {
        trigger: background.current,
        start: "top bottom",
        end: "bottom+=700px bottom",
        scrub: 0.2,
      },

      objectPosition: "0% 50%"
    })
  }, [])

  return (
    <section className="vox__parallax">
      <div
        className="background__image"
      >
        <Image
          src={PARRALAX}
          fill
          alt="Background Image"
          quality={100}
          placeholder="blur"
          sizes="100vw"
          ref={background}
        />
      </div>
      <div className="parallax__text">
        <div>L'AVENIR DE</div>
        <div>L'AUTOMATISATION DE VOTRE MAISON</div>
        <span className="mobile__span">
          L'AVENIR DE L'AUTOMATISATION DE VOTRE MAISON
        </span>
      </div>
    </section>
  );
};

export default VoxParallax;
