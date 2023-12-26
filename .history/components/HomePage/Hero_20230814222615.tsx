import React from 'react'
import Background from "../../public/images/background.jpg"
import Image from 'next/image'

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
              <span className="perpertua">24/7</span>
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
          <span></span>
        </div>
        <div className="hero__footer">
          <span>ENTRER EN CONTACT</span>
          <span>VOTRE PARTENAIRE DANS LA VIE INTELLIGENTE</span>
          <span>BASÉ AU CAMEROUN</span>
        </div>
      </div>
    </section>
  )
}

export default Hero