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

      </div>
    </section>
  )
}

export default Hero