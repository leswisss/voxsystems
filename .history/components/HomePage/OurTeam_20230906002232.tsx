"use client";

import React, {useEffect, useRef} from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TEAM from "../../public/images/team.jpg";
import TEAM2 from "../../public/images/team2.jpg";
import TeamBottom from "./TeamBottom";
import "../../styles/LandingPage/team.scss";


const OurTeam = () => {
  const imageRef = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top+=200px bottom",
        end: "top+=400px bottom",
        scrub: true,
        once: true,
        markers: true,
      },

      height: 0,
    })

    gsap.from(image2Ref.current, {
      scrollTrigger: {
        trigger: image2Ref.current,
        start: "top+=200px bottom",
        end: "top+=400px bottom",
        scrub: true,
        once: true,
        markers: true,
      },

      height: 0,
    })
  }, [])

  return (
    <section className="ourteam">
      <div className="container ourteam__container">
        <div className="team__top">
          <div className="team__top-1">
            <div className="team__overflow">
              <div className="team__image-1" ref={imageRef}>
                <Image src={TEAM} alt="Notre Equipe" fill={true} sizes="100%" quality={100} placeholder="blur"/>
              </div>
            </div>
            <div className="team__overflow">
              <p>
                LES <span>EXPERTS</span> DERRIÈRE NOS
              </p>
            </div>
          </div>
          <div className="team__overflow-v">
              <p>
                LES <span>EXPERTS</span> DERRIÈRE NOS SOLUTIONS INTELLIGENTES
              </p>
            </div>
          <div className="team__top-2">
            <div className="team__overflow">
              <p>SOLUTIONS INTELLIGENTES</p>
            </div>
            <div className="team__overflow" >
              <div className="team__image-2">
                <Image src={TEAM2} alt="Notre Equipe" fill={true} sizes="100%" quality={100} placeholder="blur"/>
              </div>
            </div>
          </div>
        </div>
        <TeamBottom homePg={true}/>
      </div>
    </section>
  );
};

export default OurTeam;
