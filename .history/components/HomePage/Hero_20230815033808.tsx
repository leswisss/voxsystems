"use client";

import React, { useState } from "react";
import Background from "../../public/images/background.jpg";
import Image from "next/image";
import "../../styles/LandingPage/hero.scss";
import { HeroData } from "@/utils";
import { loadingVariants } from "@/animations";
import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const controls = HeroData.map(() => useAnimationControls());
  const [activeService, setActiveService] = useState([false, -1]);

  return (
    <section className="hero">
      <div className="background__images">
        <Image src={Background} alt="Systems Filler" fill={false} />
      </div>
      <div className="container hero__container">
        <div className="hero__slogan">
          <div className="hero__overflow">
            <div className="slogan__1">
              <span className="perpetua">24/7</span>
              <span className="h-slogan">UN</span>
            </div>
          </div>
          <div className="hero__overflow">
            <div className="slogan__2">SYSTÈMÈ</div>
          </div>
          <div className="hero__overflow">
            <div className="slogan__3">À LA FOIS</div>
          </div>
        </div>
        <div className="scroll__container">
          <span className="scroll">SCROLL</span>
          <span className="h-line"></span>
        </div>
        <div className="hero__footer">
          <span>ENTRER EN CONTACT</span>
          <span>VOTRE PARTENAIRE DANS LA VIE INTELLIGENTE</span>
          <span>BASÉ AU CAMEROUN</span>
        </div>
        {HeroData.map((item, i) => (
          <div className={`hero__services h-service-${i}`} key={item.id}>
            <div className="h-service__overflow">
              <div className={`h-service__content`}>
                <div className="h-service__image">
                  <Image src={item.image} alt={item.name} fill={true} />
                </div>
              </div>
            </div>
            <div
              className="h-button"
              onPointerEnter={() => {
                controls[i].stop();
                setActiveService([true, i]);
              }}
              onPointerLeave={() => {
                controls[i].start("start"), setActiveService([false, -1]);
              }}
            >
              <motion.span
                className="button__animate"
                variants={loadingVariants}
                initial="start"
                animate={controls[i]}
              ></motion.span>
              <span className="button__main"></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
