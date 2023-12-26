"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/VoxPage/voxabout.scss";
import ABOUT from "../../public/images/voxabout.jpg";
import ABOUT2 from "../../public/images/voxabout2.jpg";
import ABOUT3 from "../../public/images/voxabout3.jpg";

const VoxAbout = () => {
  const imageRef = [0,1,2].map(())
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from()
  }, [])


  return (
    <section className="vox__about">
      <div className="container vox__about-container">
        <div className="va-top">
          <div className="va__overflow">
            <div className="va-image" >
              <Image
                src={ABOUT}
                alt="A propos de nous"
                fill={true}
                sizes="(max-width: 600px) 100%, 100%"
              />
            </div>
          </div>
          <div className="va__overflow">
            <div className="va-header">
              <span>QUI SOMMES</span> <span className="va-nous">NOUS?</span>
            </div>
          </div>
          <div className="va__overflow">
            <div className="va-image">
              <Image
                src={ABOUT2}
                alt="A propos de nous"
                fill={true}
                sizes="(max-width: 600px) 100%, 100%"
              />
            </div>
          </div>
        </div>
        <div className="va-bottom">
          <div className="va__overflow">
            <p>
              Vox Link est une entreprise innovante spécialisée dans les
              services d'automatisation de la maison. Nous sommes passionnés par
              la technologie et nous nous efforçons de rendre la vie de nos
              clients plus facile et plus confortable grâce à nos solutions
              d'automatisation de pointe. Notre équipe est composée d'experts en
              technologie et en design, dédiés à fournir des services de qualité
              supérieure à nos clients.
            </p>
          </div>
          <div className="va__overflow">
            <div className="va-image">
              <Image
                src={ABOUT3}
                alt="A propos de nous"
                fill={true}
                sizes="(max-width: 600px) 100%, 100%"
              />
            </div>
          </div>
          <div className="va__overflow">
            <p className="vap-2">
              Nous offrons une gamme complète de services d'automatisation pour
              votre maison, y compris l'éclairage, le contrôle de la
              température, la sécurité et les divertissements. Chez Vox Link,
              nous croyons en l'innovation constante et en l'amélioration
              continue pour répondre aux besoins changeants de nos clients. Nous
              sommes fiers de notre engagement envers l'excellence et nous
              sommes impatients de vous aider à transformer votre maison en un
              havre de paix et de confort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoxAbout;
