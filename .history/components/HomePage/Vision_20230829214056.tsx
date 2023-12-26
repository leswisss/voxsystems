"use client";

import React, { useEffect, useRef, useState } from "react";
import "../../styles/LandingPage/vision.scss";
import Image from "next/image";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion"
import { VisionData } from "@/utils";
import Link from "next/link";
import { imageScaleAnim, visionHeaderAnim } from "@/animations";

const Vision = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive === 0 ? 1 : 0));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (active === 0) {
      gsap.to(elementRef.current, {
        background:
          "conic-gradient(hsla(227, 77%, 57%, 0.4) 180deg, rgba(255,255,255,0) 0deg)",
        duration: 10,
        ease: "linear",
        onComplete: () => {
          gsap.to(elementRef.current, {
            background:
              "conic-gradient(hsla(227, 77%, 57%, 0.4) 180deg, rgba(255,255,255,0) 0deg)",
            duration: 0,
          });
        },
      });
    } else if (active === 1) {
      gsap.to(elementRef.current, {
        background:
          "conic-gradient(hsla(227, 77%, 57%, 0.4) 360deg, rgba(255,255,255,0) 0deg)",
        duration: 10,
        ease: "linear",
        onComplete: () => {
          gsap.to(elementRef.current, {
            background:
              "conic-gradient(hsla(227, 77%, 57%, 0.4) 0deg, rgba(255,255,255,0) 0deg)",
            duration: 0,
          });
        },
      });
    }
  }, [active]);

  return (
    <section className="vision">
      <div className="container vision__container">
        <div className="vision__image">
          <AnimatePresence mode="popLayout">
          {active === 0 && (
            <motion.div variants={imageScaleAnim} exit="exit" animate={active === 0 ? "entry": "exit"} initial="initial" className="vv-image">
              <Image
                src={VisionData[0].image}
                alt="Notre Vision"
                fill={true}
                sizes="(max-width: 600px) 100%, 100%"
              />
            </motion.div>
          )}
          </AnimatePresence>

          <AnimatePresence mode="popLayout">
          {active === 1 && (
            <motion.div  variants={imageScaleAnim} exit="exit" animate={active === 1 ? "entry": "exit"} initial="initial" className="vv-image">
            <Image
              src={VisionData[1].image}
              alt="Notre Mission"
              fill={true}
              sizes="(max-width: 600px) 100%, 100%"
            />
            </motion.div>
          )}
          </AnimatePresence>
        </div>
        <div className="vision__content">
          <div className="circle__loader" ref={elementRef}>
            <div className="circle__loader-2">
              <div className="vision__overflow">
                <div className="vision__loader">
                  <AnimatePresence mode="popLayout">
                  {active === 0 && (
                    <motion.h3 variants={visionHeaderAnim} initial="initial" animate={active === 0 ? "entry": "exit"} exit="exit">
                      {VisionData[0].name} {VisionData[0].name2}
                    </motion.h3>
                  )}
                  </AnimatePresence>
                  
                  <AnimatePresence mode="popLayout">
                  {active === 1 && (
                    <motion.h3 variants={visionHeaderAnim} initial="initial" animate={active === 1 ? "entry": "exit"} exit="exit">
                      {VisionData[1].name} {VisionData[1].name2}
                    </motion.h3>
                  )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
          <div className="vision__text">
            <div className="vision__overflow">
              <div className="vision__header-v">
                <AnimatePresence mode="popLayout">
                {active === 0 && (
                  <motion.h3 variants={visionHeaderAnim} initial="initial" animate={active === 0 ? "entry": "exit"} exit="exit">
                    {VisionData[0].name} <span>{VisionData[0].name2}</span>  
                  </motion.h3>
                )}
                </AnimatePresence>

                <AnimatePresence mode="popLayout">
                {active === 1 && (
                  <motion.h3 variants={visionHeaderAnim} initial="initial" animate={active === 1 ? "entry": "exit"} exit="exit">
                    {VisionData[1].name} <span>{VisionData[1].name2}</span> 
                  </motion.h3>
                )}
                </AnimatePresence>
              </div>
            </div>
            <div className="vision__data">
              {active === 0 && <motion.p variants={visionHeaderAnim} initial="initial" animate={active === 0 ? "entry": "exit"} exit="exit">{VisionData[0].text}</motion.p>}

              {active === 1 && <motion.p variants={visionHeaderAnim} initial="initial" animate={active === 1 ? "entry": "exit"} exit="exit">{VisionData[1].text}</motion.p>}
            </div>
            <Link href="/a-propos-de-nous" className="vision__cta">
              <span></span>En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
