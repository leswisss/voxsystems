"use client";

import React, {useState} from "react";
import { HeroData } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import "../../styles/LandingPage/services.scss"


const Services = () => {
  const [activeCard, setActiveCard] = useState([false, -1])
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
            <div className="services__overflow" key={item.id} onMouseEnter={() => setActiveCard([true, i])} >
              <div className="service__card">
                <div className="service__image">
                  <Image src={item.image2} alt={item.name} fill={true}/>
                </div>
                <div className="service__content">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="service__cta-overflow">
                  <Link href={item.link} className="service__cta">
                    En savoir plus <span></span>
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
