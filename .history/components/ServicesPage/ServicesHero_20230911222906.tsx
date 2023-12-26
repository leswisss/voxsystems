"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ServicesCard from './ServicesCard';
import { ServicePageData } from '@/utils';
import "../../styles/ServicesPage/servicesPage.scss"

const ServicesPage = ({setState, state, state2}: {setState: React.Dispatch<React.SetStateAction<boolean>>, state: boolean, state2: boolean}) => {
  const textRefs = [0,1,2].map(() => useRef(null))

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()

    const tl = gsap.timeline();

    tl
      .to(textRefs[0].current, {y: "0%", duration: 1, ease: "power4"},0.1)
      .to(textRefs[1].current, {y: "0%", duration: 1, ease: "power4"}, 0.1)
      .to(textRefs[2].current, {y: "0%", duration: 1, ease: "power4"}, 0.5)

    
      !(!state && !state2) ? tl.pause() : tl.play()

  }, [state, sta])

  return (
    <section className="services__page">
      <div className="p-services__header">
        <div className="s-header__container">
          <div className="p__ser-overflow"><p className="ps__header" ref={textRefs[0]}>CE QUE</p></div>
          <div className="p__ser-overflow"><p className="ps__header" ref={textRefs[1]}>NOUS <span>OFFRONS</span></p></div>
          <div className="p__ser-overflow">
            <p className="ps__para" ref={textRefs[2]}>
              Ameliorez votre vie grace a la technologie. Nous sommes la pour vous aider a atteindre vos 
              objectifs et a réaliser vos reves. Découvrez comment nous pouvons vous aider des aujourd'hui.
            </p>
          </div>
        </div>
      </div>
      <div className="container p-services__con">
        {
          ServicePageData.map((item, i) => (
            <ServicesCard key={`ps-${i}`} data={item} setState={setState}/>
          ))
        }
      </div>
    </section>
  )
}

export default ServicesPage