"use client";

import React, {useEffect, useState} from "react";
import Image from "next/image";
import "../../styles/VoxPage/voxhero.scss"
import VOX from "../../public/images/voxhero.jpg";
import { Icon } from "@iconify/react";
import arrowUpBroken from "@iconify/icons-solar/arrow-up-broken";
import VOX2 from "../../public/images/voxhero2.jpg";
import VOX3 from "../../public/images/voxhero3.jpg";

const VoxHero = () => {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <section className="vox__hero">
      <div className="background__images" style={{backgroundImage: "../../public/images/voxhero.jpg"}}>
        {/* <Image
          src={VOX}
          alt="Vox Hero Filler"
          fill={true}
          sizes="(max-width: 600px) 100%, 100%"
        /> */}
      </div>
      <div className="container vox__hero-container">
        <div className="vox__hero-slogan">
          <div className="vox__overflow">
            <span className="v-automatisez">AUTOMATISEZ</span> <span>VOTRE</span>
          </div>
          <div className="vox__overflow"><span>MAISON SIMPLIFIEZ</span></div>
          <div className="vox__overflow"><span>VOTRE VIE</span></div>
        </div>
        <div className="vox__hero-text">
          <p>
            Laissez-nous vous aider à simplifier votre routine quotidienne et à
            apporter de la facilité et commodité à votre vie.
          </p>
        </div>
        <div className="vox__explore">
          <span>EXPLORE <Icon icon={arrowUpBroken} /></span>
        </div>
      </div>
    </section>
  );
};

export default VoxHero;
