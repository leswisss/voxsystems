import React from 'react'
import Image from 'next/image'

const VoxParallax = () => {
  return (
    <section className='vox__parallax'>
      <div className="background__images">
        <Image
          src={VOX}
          alt="Vox Hero Filler"
          fill={true}
          sizes="(max-width: 600px) 100%, 100%"
        />
      </div>
    </section>
  )
}

export default VoxParallax