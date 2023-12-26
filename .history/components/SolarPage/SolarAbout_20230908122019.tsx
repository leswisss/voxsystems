"use client";

import React, {useRef, useEffect} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'
import IMAGE from "../../public/images/solarabout.jpg"
import IMAGE2 from "../../public/images/solarabout2.jpg"
import "../../styles/SolarPage/solarabout.scss"

const SolarAbout = () => {
  const imageRefs = [0,1].map(() => useRef(null))
  const imageContainerRefs = [0,1].map(() => useRef(null))

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    imageContainerRefs.forEach((imageConRef, i) => {
      gsap.from(imageRefs[i].current, {
        scrollTrigger: {
          trigger: imageConRef.current,
          start: "top+=250px bottom",
          end: "bottom+=100px bottom",
          scrub: 0.3,
          markers: true,
        },
        delay: 1,
        height: 0
      })
    })
  }, [])

  return (
    <section className="solar__about">
      <div className="container sa__container">
        <div className="sa__top">
          <div className="sa-top__left">
            <div className="sa__overflow">
              <p>NOUS SOMMES FIERS DE PROPOSER</p>
            </div>
            <div className="sa__overflow">
              <p>UNE LARGE GAMMES DE SERVICES</p>
            </div>
            <div className="sa__overflow">
              <p>D'ÉNERGIE SOLAIRE, Y COMPRIS</p>
            </div>
            <div className="sa__overflow">
              <p><span>L'INSTALLATION</span>, LA <span>MAINTENANCE</span> ET</p>
            </div>
            <div className="sa__overflow">
              <p>LA <span>RÉPARATION</span> DE PANNAUX SOLAIRES</p>
            </div>
            <div className="sa__over-mobile">
            <p>NOUS SOMMES FIERS DE PROPOSER UNE LARGE GAMMES DE SERVICES D'ÉNERGIE SOLAIRE, Y COMPRIS <span>L'INSTALLATION</span>, LA <span>MAINTENANCE</span> ET LA <span>RÉPARATION</span> DE PANNAUX SOLAIRES</p>
            </div>
          </div>
          <div className="sa-top__right" ref={imageContainerRefs[0]}>
            <div className="sa__image-1" ref={imageRefs[0]}>
              <Image src={IMAGE} alt="A propos de nous" fill={true} sizes='(max-width: 600px) 100%, 100%'/>
            </div>
          </div>
        </div>
        <div className="sa__bottom">
          <div className="sa-bottom__left" ref={imageContainerRefs[1]}>
            <div className="sa__image-2" ref={imageRefs[1]}>
              <Image src={IMAGE2} alt="A propos de nous" fill={true} sizes='(max-width: 600px) 100%, 100%'/>
            </div>
          </div>
          <div className="sa-bottom__right">
            <p>
              Notre engagement en faveur de la durabilité est au cœur de tout ce que nous faisons. Nous croyons en l'exploitation de la puissance du soleil pour fournir une énergie propre et renouvelable pour un avenir plus radieux. Notre objectif est de rendre l'énergie solaire accessible et abordable pour tous, et nous sommes dédiés à fournir des services d'installation, de maintenance et de réparation de panneaux solaires de qualité supérieure.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolarAbout