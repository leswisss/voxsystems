"use client";

import React, { useState, useEffect, useRef } from "react";
import Background from "../../public/images/background.jpg";
import { gsap } from "gsap";
import Image from "next/image";
import "../../styles/LandingPage/hero.scss";
import { HeroData } from "@/utils";
import { loadingVariants, OpacityAnim} from "@/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const [activeService, setActiveService] = useState([false, -1]);
  const imageRef = useRef(null)
  const textRef = HeroData.map(() => useRef(null))
  const footerRef = useRef(null)

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    const tl2 = gsap.timeline();

    tl.to(imageRef.current, {
      scaleX: 1.2,
      scaleY: 1.2,
      duration: 15,
      ease: "linear",
    }).to(imageRef.current, {
      scaleX: 1,
      scaleY: 1,
      duration: 15,
      ease: "linear",
    })

    tl2
      .to(textRef[0].current, {y: "0%", duration: 1, ease: "power4"})
      .to(textRef[1].current, {y: "0%", duration: 1, ease: "power4"}, 0)
      .to(textRef[2].current, {y: "0%", duration: 1, ease: "power4"}, 0)
      .to(footerRef.current, {y: "0px", duration: 1, ease: "power4"}, 0.5)

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
          sizes="(max-width: 600px) 100px, 100vw"
        />
      </div>
      <div className="container hero__container">
        <div className="hero__slogan">
          <div className="hero__overflow">
            <div  className="slogan__1" ref={textRef[0]}>
              <span className="perpetua">24/7</span>
              <span className="h-slogan">UN</span>
            </div>
          </div>
          <div className="hero__overflow">
            <div className="slogan__2" ref={textRef[1]}>SYSTÈMÈ</div>
          </div>
          <div className="hero__overflow">
            <div className="slogan__3" ref={textRef[2]}>À LA FOIS</div>
          </div>
        </div>
        <motion.div data-scroll data-scroll-speed="0.1" variants={OpacityAnim} initial="initial" animate="entry" className="scroll__container">
          <span className="scroll">SCROLL</span>
          <span className="h-line"></span>
        </motion.div>
        <div className="hero__footer" ref={footerRef}>
          <Link href="/contacts?service=vox-link">ENTRER EN CONTACT</Link>
          <span>VOTRE PARTENAIRE DANS LA VIE INTELLIGENTE</span>
          <span className="hf-span">BASÉ AU CAMEROUN</span>
        </div>
        {HeroData.map((item, i) => (
          <div data-scroll data-scroll-speed="0.2" className={`hero__services h-service-${i}`} key={`h-${i}`}>
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
