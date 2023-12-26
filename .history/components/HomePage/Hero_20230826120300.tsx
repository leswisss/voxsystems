"use client";

import React, { useState, useEffect } from "react";
import Background from "../../public/images/background.jpg";
import Image from "next/image";
import "../../styles/LandingPage/hero.scss";
import { HeroData } from "@/utils";
import { loadingVariants } from "@/animations";

import { motion } from "framer-motion";

import Link from "next/link";

const Hero = () => {

  const [activeService, setActiveService] = useState([false, -1]);
  
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <section className="hero">
      <div className="background__images">
        <Image src={Background} alt="Systems Filler" fill={true} sizes="(max-width: 600px) 100%, 100%"/>
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
          <Link href="/contacts?service=vox-link">ENTRER EN CONTACT</Link>
          <span>VOTRE PARTENAIRE DANS LA VIE INTELLIGENTE</span>
          <span>BASÉ AU CAMEROUN</span>
        </div>
        {HeroData.map((item, i) => (
          <div className={`hero__services h-service-${i}`} key={`h-${i}`}>
            <div className={`h-service__overflow ${
                  activeService[0] &&
                  activeService[1] === i &&
                  "active__service"
                }`}>
              <Link href={item.link}
                className="h-service__content"
                onMouseOver={() => {
                  setActiveService([true, i]);
                }}
                onMouseOut={() => {
                  setActiveService([false, -1]);
                }}
              >
                <div className="h-service__image">
                  <Image src={item.image} alt={item.name} fill={true} sizes="(max-width: 600px) 100%, 100%"/>
                </div>
                <div className="h-service__data">
                  <span>{item.name}</span>
                </div>
              </Link>
            </div>
            <div
              className="h-button"
              onMouseOver={() => {
                setActiveService([true, i]);
              }}
              onMouseOut={() => {
                setActiveService([false, -1]);
              }}
            >
              <motion.span
                className="button__animate"
                variants={loadingVariants}
                initial= "initial"
                animate = {activeService[0] && activeService[1] === i ? "exit" : "initial"}
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
