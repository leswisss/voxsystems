"use client";

import React, {useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VoxServicesData } from "@/utils";
import "../../styles/VoxPage/voxservices.scss"
import Image from "next/image";

const VoxServices = () => {
  const textRefs = [0,1,2].map(() => useRef(null))
  const serviceRefs = [0,1,2,3].map(() => useRef(null))
  const serviceContainerRefs = [0,1,2,3].map(() => useRef(null))

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    textRefs.forEach((textRef, i) => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top+=30px bottom",
          end: "bottom+=80px bottom",
          scrub: 0.3,
        },

        ease: "ease.inOut",
        x: "-100%",
        opacity: 0,
      })
    })

    serviceContainerRefs.forEach((containerRef, i) => {
      gsap.from(serviceRefs[i].current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top+=80px bottom",
          end: "bottom+=50px bottom",
          scrub: 0.3,
          markers: true,
        },

        height: "0%",
        padding
      })
    })

  }, [])


  return (
    <section className="vox__services">
      <div className="container v-services__container">
        <div className="v-services__header">
          <div className="vs__overflow">
            <div ref={textRefs[0]}>NOUS OFFRONS UNE VARIÉTÉ</div>
          </div>
          <div className="vs__overflow">
            <div ref={textRefs[1]}>
              DE SERVICES <span>HAUT DE GAMME</span>
            </div>
          </div>
          <div className="vs__overflow-mobile">
          <div ref={textRefs[2]}>NOUS OFFRONS UNE VARIÉTÉ DE SERVICES <span>HAUT DE GAMME</span></div>
          </div>
        </div>
        <div className="v-services__content">
          {
            VoxServicesData.map((item, i) => (
              <div className="vsd__overflow" key={`vs-${i}`} ref={serviceContainerRefs[i]}>
                <div className="vs__card" ref={serviceRefs[i]}>
                  <div className="svg__image">
                    <Image src={item.svg} alt={item.name} fill={true} sizes="100%"/>
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default VoxServices;
