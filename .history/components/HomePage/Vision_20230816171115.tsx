"use client";

import React, { useEffect, useRef, useState } from "react";
import "../../styles/LandingPage/vision.scss";
import Image from "next/image";
import IMAGE from "../../public/images/vision.jpg";
import { gsap } from "gsap";
import { VisionData } from "@/utils";
import Link from "next/link";


const Vision = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive === 0 ? 1 : 0));
    }, 10000);

    gsap.to(elementRef.current, {
      background:
        "conic-gradient(hsla(227, 77%, 57%, 0.4) 360deg, rgba(255,255,255,0) 0deg)",
      duration: 20,
      ease: "linear",
      onComplete: () => {
        gsap.to(elementRef.current, {
          background:
            "conic-gradient(hsla(227, 77%, 57%, 0.4) 0deg, rgba(255,255,255,0) 0deg)",
          duration: 0,
        });
      },
    });
    return () => clearInterval(interval);
  }, []);

  
  return (
    <section className="vision">
      <div className="container vision__container">
        <div className="vision__image">
          {
            VisionData.map((item, i) => (
              <Image src={item.image} alt="Notre Vision" fill={true} key={`i${i}`} style={{opacity: active === i ? 1 : 0}} width={}/>
            ))
          }
          
        </div>
        <div className="vision__content">
          <div className="circle__loader" ref={elementRef}>
            <div className="circle__loader-2">
              <div className="vision__overflow">
                <div className="vision__loader">
                  {
                    VisionData.map((item, i) => (
                      <h3 key={`v${i}`} style={{opacity: active === i ? 1 : 0}}>{item.name} {item.name2}</h3>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="vision__text">
            <div className="vision__overflow">
              <div className="vision__header-v">
                {
                    VisionData.map((item, i) => (
                      <h3 key={`v${i}`} style={{opacity: active === i ? 1 : 0}}>{item.name} <span>{item.name2}</span></h3>
                    ))
                  }
              </div>
            </div>
            <div className="vision__data">
                {
                  VisionData.map((item, i) => (
                    <p key={`p${i}`} style={{opacity: active === i ? 1 : 0}}>
                      {item.text}
                    </p>
                  ))
                }
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
