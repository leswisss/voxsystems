import React from 'react'
import Background from "../../public/images/background.jpg"
import Image from 'next/image'
import "../../styles/LandingPage/hero.scss"
import { HeroData } from '@/utils'
import { loadingVariants } from '@/animations'
import motion


const Hero = () => {
  return (
    <section className="hero">
      <div className="background__images">
        <Image src={Background} alt="Systems Filler" fill={false}/>
      </div>
      <div className="container hero__container">
        <div className="hero__slogan">
          <div className="hero__overflow">
            <div className="slogan__1">
              <span className="perpetua">24/7</span>
              <span className="h-slogan">UN</span>
            </div>
          </div>
          <div className="hero__overflow">
            <div className="slogan__2">
              SYSTÈMÈ
            </div>
          </div>
          <div className="hero__overflow">
            <div className="slogan__3">
              À LA FOIS
            </div>
          </div>
        </div>
        <div className="scroll__container">
          <span className='scroll'>SCROLL</span>
          <span className='h-line'></span>
        </div>
        <div className="hero__footer">
          <span>ENTRER EN CONTACT</span>
          <span>VOTRE PARTENAIRE DANS LA VIE INTELLIGENTE</span>
          <span>BASÉ AU CAMEROUN</span>
        </div>
        {
          HeroData.map((item, i) => (
            <div className={`hero__services h-service-${i}`}>
              <div className="h-button">
                <motion.span className="button__animate"></motion.span>
                <span className="button__main"></span>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Hero