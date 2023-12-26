"use client";

import React, { useEffect } from 'react';
import ServicesCard from './ServicesCard';
import { ServicePageData } from '@/utils';
import "../../styles/ServicesPage/servicesPage.scss"

const ServicesPage = () => {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <section className="services__page">
      <div className="p-services__header">
        <div className="s-header__container">
          <div className="p__ser-overflow"><p className="ps__header" ref={}>CE QUE</p></div>
          <div className="p__ser-overflow"><p className="ps__header" ref={}>NOUS <span>OFFRONS</span></p></div>
          <div className="p__ser-overflow">
            <p className="ps__para" ref={}>
              Ameliorez votre vie grace a la technologie. Nous sommes la pour vous aider a atteindre vos 
              objectifs et a réaliser vos reves. Découvrez comment nous pouvons vous aider des aujourd'hui.
            </p>
          </div>
        </div>
      </div>
      <div className="container p-services__con">
        {
          ServicePageData.map((item, i) => (
            <ServicesCard key={`ps-${i}`} data={item}/>
          ))
        }
      </div>
    </section>
  )
}

export default ServicesPage