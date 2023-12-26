"use client";

import React, { useEffect } from 'react'
import Image from 'next/image'

const TeamHero = () => {
  return (
    <section className="team__hero">
      <div className="t-hero__image">
        <Image /> 
      </div>
    </section>
  )
}

export default TeamHero