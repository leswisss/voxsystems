import React from 'react'
import Link from 'next/link'
import SOLAR from "../../public/images/solar.jpg"
import SOLAR2 from "../../public/images/solar2.jpg"

const SolarHero = () => {
  const heroImages = [SOLAR, SOLAR2]

  return (
    <section className="solar">
      <div className="container solar-hero__container">
        <div className="s-hero__text">
          <div className="s-hero__header">
            <div className="sh__overflow">Investissez dans le <span>solaire</span></div>
            <div className="sh__overflow">pour un avenir radieux</div>
          </div>
          <div className="sh__desc">
            <div className="sh__overflow"><p>Nous transformons l'accès à l'énergie renouvelable avec des</p></div>
            <div className="sh__overflow"><p>solutions simples et puissantes.</p></div> 
          </div>
          <div className="sh__cta">
            <div className="sh__overflow">
              <Link href="/">Contactez nous</Link>
            </div>
          </div>
        </div>

        <div className="s-hero__image">
          {
            her
          }
        </div>
      </div>
    </section>
  )
}

export default SolarHero