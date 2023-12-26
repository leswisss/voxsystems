import React from 'react'
import Background from "../../public/images/background.jpg"
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="hero">
      <div className="background__images">
        <Image src={Background} alt="Systems Filler"/>
      </div>
      <div className="container hero__container">
        <div className="hero__slogan">
          <div className="hero__overflow">
            <div className="slogan__1">
              <span className="perpertua">24/7</span>
              span.h-slogan
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero