"use client";

import React, { useEffect } from "react";
import IMAGE from "../../public/images/thero.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/TeamPage/teamhero.scss"
import Image from "next/image";

const TeamHero = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();


  }, []);

  return (
    <section className="team__hero">
      <div className="t-hero__image">
        <Image src={IMAGE} fill alt="Background Image" quality={100} placeholder="blur" sizes="100vw" on/>
      </div>

      <div className="thero__text">
        <div className="t-hero__overflow">
          <h3>RENCONTREZ</h3>
        </div>
        <div className="t-hero__overflow">
          <h3>NOTRE ÉQUIPE</h3>
        </div>
        <div className="t-hero__overflow">
          <p>
            Nous travaillons ensemble pour atteindre nos objectifs et sommes
            engagés a offrir l'excellence dans tout ce que nous faisons.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
