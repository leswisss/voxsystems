import React from 'react'
import Image from 'next/image'
import VOX from "../../public/images/voxhero.jpg"
import VOX2 from "../../public/images/voxhero2.jpg"
import VOX3 from "../../public/images/voxhero3.jpg"

const VoxHero = () => {
  return (
    <section className="vox__hero">
      <div className="background__images">
        <Image src={VOX} alt="Vox Hero Filler" fill={false} sizes="(max-width: 600px) 100%, 100%"/>
      </div>
      <div className="container vox__hero-container">
        <div className="vox__hero-slogan">
          <div className="vox__overflow">
            <span>AUTOMATISEZ</span> VOTRE
          </div>
          <div className="vox__overflow">
            MAISON SIMPLIFIEZ
          </div>
          <div className="vox__overflow">
            VOTRE VIE
          </div>
        </div>
        <div className="vox__hero-text">
          <p>
            Laissez-nous vous aider a simplifier votre routine quotidienne et a apporter 
          </p>
        </div>
      </div>
    </section>
  )
}

export default VoxHero