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
              <Image src={item.image} alt="Notre Vision" fill={true} key={`i${i}`}/>
            ))
          }
          
        </div>
        <div className="vision__content">
          <div className="circle__loader" ref={elementRef}>
            <div className="circle__loader-2">
              <div className="vision__overflow">
                div.
                <h3>NOTRE VISION</h3>
              </div>
            </div>
          </div>
          <div className="vision__text">
            <div className="vision__overflow">
              <h3>
                NOTRE <span>VISION</span>
              </h3>
            </div>
            <div className="vision__data">

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
