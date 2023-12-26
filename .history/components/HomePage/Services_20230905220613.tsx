"use client";

import React, { useState, useRef, useEffect } from "react";
import { HeroData } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "../../styles/LandingPage/services.scss";
import { Icon } from "@iconify/react"
import arrowUpBroken from '@iconify/icons-solar/arrow-up-broken';

const Services = () => {
  const [activeCard, setActiveCard] = useState([false, -1]);
  const overflowRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: overflowRef.current,
        start: "top bottom",
        end: "top+=200px bottom",
        scrub: true,
      },

      y: "100%",
      opacity: 0.5,
    })
  }, [])

  return (
    <section className="services">
      <div className="container services__container">
        <div className="services__title-wrapper">
          <div className="services__overflow">
            <h3>SERVICES</h3>
          </div>
        </div>
        <div className="services__wrapper">
          {HeroData.map((item, i) => (
            <div
              className="services__overflow"
              key={`s-${i}`}
              onMouseEnter={() => setActiveCard([true, i])}
              onMouseLeave={() => setActiveCard([false, -1])}
            >
              <div className="service__card">
                <div className="service__image">
                  <Image
                    src={item.image2}
                    alt={item.name}
                    fill={true}
                    sizes="(max-width: 600px) 100%, 100%"
                    className={`s-img-2 ${
                      activeCard[0] && activeCard[1] === i && "active-service"
                    }`}
                  />
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill={true}
                    sizes="(max-width: 600px) 100%, 100%"
                    className={`s-img-1 ${
                      activeCard[0] && activeCard[1] === i && "active-service"
                    }`}
                  />
                </div>
                <div className="service__content">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="service__cta-overflow" >
                  <Link href={item.link} className="service__cta">
                    En savoir plus <span><Icon icon={arrowUpBroken} /></span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
