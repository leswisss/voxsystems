"use client";

import React, {useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VoxServicesData } from "@/utils";
import "../../styles/VoxPage/voxservices.scss"
import Image from "next/image";

const VoxServices = () => {
  const textRef = [0,1,2].map(() => useRef(null))

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    
  }, [])


  return (
    <section className="vox__services">
      <div className="container v-services__container">
        <div className="v-services__header">
          <div className="vs__overflow">
            <div>NOUS OFFRONS UNE VARIÉTÉ</div>
          </div>
          <div className="vs__overflow">
            <div>
              DE SERVICES <span>HAUT DE GAMME</span>
            </div>
          </div>
          <div className="vs__overflow-mobile">
          <div>NOUS OFFRONS UNE VARIÉTÉ DE SERVICES <span>HAUT DE GAMME</span></div>
          </div>
        </div>
        <div className="v-services__content">
          {
            VoxServicesData.map((item, i) => (
              <div className="vsd__overflow" key={`vs-${i}`}>
                <div className="vs__card">
                  <div className="svg__image">
                    <Image src={item.svg} alt={item.name} fill={true} sizes="(max-width: 600px) 100%, 100%"/>
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
