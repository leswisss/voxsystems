"use client";

import React, {useRef, useEffect} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'
import IMAGE from "../../public/images/solarabout.jpg"
import IMAGE2 from "../../public/images/solarabout2.jpg"
import "../../styles/SolarPage/solarabout.scss"

const SolarAbout = () => {
  const imageContainerRefs = [0,1].map(() => useRef(null))
  const imageRefs = [0,1].map(() => useRef(null))
  const textRefs = [0,1,2,3,4,5].map(() => useRef(null))

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    imageRefs.forEach((imageRef, i) => {
      gsap.from(imageContainerRefs[i].current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top+=250px bottom",
          end: "bottom+=100px bottom",
          scrub: 0.3,
          markers: true,
        },

        height: 0
      })
    })

    textRefs.forEach((textRef, i) => {
      gsap.from()
    })


  }, [])

  return (
    <section className="solar__about">
      <div className="container sa__container">
        <div className="sa__top">
          <div className="sa-top__left">
            <div className="sa__overflow">
              <p ref={textRefs[0]}>NOUS SOMMES FIERS DE PROPOSER</p>
            </div>
            <div className="sa__overflow">
              <p ref={textRefs[1]}>UNE LARGE GAMMES DE SERVICES</p>
            </div>
            <div className="sa__overflow">
              <p ref={textRefs[2]}>D'ÉNERGIE SOLAIRE, Y COMPRIS</p>
            </div>
            <div className="sa__overflow">
              <p ref={textRefs[3]}><span>L'INSTALLATION</span>, LA <span>MAINTENANCE</span> ET</p>
            </div>
            <div className="sa__overflow">
              <p ref={textRefs[4]}>LA <span>RÉPARATION</span> DE PANNAUX SOLAIRES</p>
            </div>
            <div className="sa__over-mobile">
            <p ref={textRefs[5]}>NOUS SOMMES FIERS DE PROPOSER UNE LARGE GAMMES DE SERVICES D'ÉNERGIE SOLAIRE, Y COMPRIS <span>L'INSTALLATION</span>, LA <span>MAINTENANCE</span> ET LA <span>RÉPARATION</span> DE PANNAUX SOLAIRES</p>
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