import React from "react";
import { HeroData } from "@/utils";
import Image from "next/image";

const Services = () => {
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
            <div className="services__overflow" key={item.id}>
              <div className="service__card">
                <div className="service__image">
                  <Image src={item.image2} alt={item.name} fill={false}/>
                </div>
                <div className="service__content">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="service__cta+overflow">
                  <div className="service__cta">
                    En savoir plus 
                  </div>
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
