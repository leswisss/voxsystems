import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/abouthero.jpg"

const AboutHero = () => {
  return (
    <section className="about__hero">
      <div className="ahero__image">
        <Image src={IMAGE} alt="Hero Image" fill={true} sizes='(max-width: 600px) 100%, 100%'/>
      </div>
      <div className="ahero__overlay"></div>
      <div className="ahero__header">
        <div className="ahero__overflow">
          <h3>L'INNOVATION</h3>
        </div>
        <div className="ahero__overflow">
          <h3>CAMEROUNAISE POUR UN MONDE</h3>
        </div>
        <div className="ahero__overflow">
          <h3>MEILLEUR</h3>
        </div>
      </div>
    </section>
  )
}

export default AboutHero