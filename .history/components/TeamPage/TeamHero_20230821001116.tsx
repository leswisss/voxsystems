"use client";

import React, { useEffect } from 'react'
import IMAGE from "../../public/images/thero.jpg"
import Image from 'next/image'

const TeamHero = () => {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <section className="team__hero">
      <div className="t-hero__image">
        <Image src={IMAGE} alt="Our Team" fill={true} sizes='(max-width: 600px) 100%, 100%' /> 
      </div>

      <div className="thero__text">
        div.
      </div>
    </section>
  )
}

export default TeamHero