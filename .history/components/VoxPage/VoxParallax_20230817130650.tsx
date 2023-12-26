import React from 'react'
import Image from 'next/image'
import PARRALAX from "../../public/images/voxparallax.jpg"

const VoxParallax = () => {
  return (
    <section className='vox__parallax'>
      <div className="background__images">
        <Image
          src={PARRALAX}
          alt="Vox Hero Filler"
          fill={true}
          sizes="(max-width: 600px) 100%, 100%"
        />
      </div>
      div.parallax__
    </section>
  )
}

export default VoxParallax