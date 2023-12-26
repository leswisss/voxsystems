import React from 'react'

const VoxHero = () => {
  return (
    <section className="vox__hero">
      <div className="background__images">
        <Image src={Background} alt="Vox Hero Filler" fill={false} sizes="(max-width: 600px) 100%, 100%"/>
      </div>
      <div className="container vox__hero-container">

      </div>
    </section>
  )
}

export default VoxHero