import React from 'react'
import Image from 'next/image'
import PARRALAX from "../../public/images/voxparallax.jpg"
import "../../styles/VoxPage/vparallax.scss"

const VoxParallax = () => {
  return (
    <section className='vox__parallax'>
      <div className="background__image" style={{backgroundImage: "url("}}>
        <Image
          src={PARRALAX}
          alt="Vox Hero Filler"
          fill={true}
          sizes="(max-width: 600px) 100%, 100%"
        />
      </div>
      <div className="parallax__text">
        <div>L'AVENIR DE</div>
        <div>L'AUTOMATISATION DE VOTRE MAISON</div>
      </div>
    </section>
  )
}

export default VoxParallax