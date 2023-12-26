"use client";

import React, { useEffect, useRef, useState } from "react";
import "../../styles/LandingPage/vision.scss";
import Image from "next/image";
import IMAGE from "../../public/images/vision.jpg";
import { gsap } from "gsap";
import Link from "next/link";

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
      });
    } else {
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
  },[active]);

  return (
    <section className="vision">
      <div className="container vision__container">
        <div className="vision__image">
          <Image src={IMAGE} alt="Notre Vision" fill={true} />
        </div>
        <div className="vision__content">
          <div className="circle__loader" ref={elementRef}>
            <div className="circle__loader-2">
              <div className="vision__overflow">
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
              Chez SYSTEMS, nous croyons en la création de solutions
              intelligentes et durables qui améliorent la qualité de vie et
              d'apprentissage de nos clients. Nous mettons à profit notre
              expertise en automatisation, en câblage, en énergie solaire et en
              éducation pour offrir des produits et des services personnalisés
              et innovants qui répondent aux besoins et aux préférences variés
              de nos clients. Nous sommes engagés envers l'excellence, la
              satisfaction du client, la responsabilité sociale et la protection
              de l'environnement. Notre vision est d'être le fournisseur leader
              de systèmes intégrés qui rendent les maisons, les soins de santé
              et l'éducation plus accessibles, efficaces et agréables.
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
