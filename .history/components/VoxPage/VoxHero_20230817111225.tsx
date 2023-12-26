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

      </div>
    </section>
  )
}

export default VoxHero