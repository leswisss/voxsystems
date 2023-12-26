"use client";

import React, { useState, useEffect, useRef } from "react";
import Background from "../../public/images/background.jpg";
import { gsap } from "gsap";
import Image from "next/image";
import "../../styles/LandingPage/hero.scss";
import { HeroData } from "@/utils";
import { HomeHeroFooter, loadingVariants, HomeHeroSlogan, OpacityAnim} from "@/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const [activeService, setActiveService] = useState([false, -1]);
  const imageRef = useRef(null)

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(imageRef, {
      s
    })
  }, [])

  return (
    <section className="hero">
      <div className="background__images" ref={imageRef}>
        <Image
          src={Background}
          fill
          alt="Background Image"
          quality={100}
          placeholder="blur"
          sizes="100vw"
        />
      </div>
      <div className="container hero__container">
        <div className="hero__slogan">
          <div className="hero__overflow">
            <motion.div variants={HomeHeroSlogan} initial="initial" animate="entry" className="slogan__1">
              <span className="perpetua">24/7</span>
              <span className="h-slogan">UN</span>
            </motion.div>
          </div>
          <div className="hero__overflow">
            <motion.div variants={HomeHeroSlogan} initial="initial" animate="entry" className="slogan__2">SYSTÈMÈ</motion.div>
          </div>
          <div className="hero__overflow">
            <motion.div variants={HomeHeroSlogan} initial="initial" animate="entry" className="slogan__3">À LA FOIS</motion.div>
          </div>
        </div>
        <motion.div variants={OpacityAnim} initial="initial" animate="entry" className="scroll__container">
          <span className="scroll">SCROLL</span>
          <span className="h-line"></span>
        </motion.div>
        <motion.div variants={HomeHeroFooter} initial="initial" animate="entry" className="hero__footer">
          <Link href="/contacts?service=vox-link">ENTRER EN CONTACT</Link>
          <span>VOTRE PARTENAIRE DANS LA VIE INTELLIGENTE</span>
          <span className="hf-span">BASÉ AU CAMEROUN</span>
        </motion.div>
        {HeroData.map((item, i) => (
          <div className={`hero__services h-service-${i}`} key={`h-${i}`}>
            <div
              className={`h-service__overflow ${
                activeService[0] && activeService[1] === i && "active__service"
              }`}
            >
              <Link
                href={item.link}
                className="h-service__content"
                onMouseOver={() => {
                  setActiveService([true, i]);
                }}
                onMouseOut={() => {
                  setActiveService([false, -1]);
                }}
                onClick={() => {
                  setActiveService([false, -1]);
                }}
              >
                <div className="h-service__image">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill={true}
                    sizes="(max-width: 600px) 100%, 100%"
                  />
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
              onClick={() => {
                activeService[1] === i
                  ? setActiveService([false, -1])
                  : setActiveService([true, i]);
              }}
            >
              <motion.span
                className="button__animate"
                variants={loadingVariants}
                initial="initial"
                animate={
                  activeService[0] && activeService[1] === i
                    ? "exit"
                    : "initial"
                }
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
