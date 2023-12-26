import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import Image from 'next/image'
import SOLAR from "../../public/images/solar.jpg"
import SOLAR2 from "../../public/images/solar2.jpg"  
import "../../styles/SolarPage/solarhero.scss"

const SolarHero = () => {
  const heroImages = [SOLAR, SOLAR2]
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  useEffect(() => {
    
  }, [activeImage])
  
  return (
    <section className="solar">
      <div className="container solar-hero__container">
        <div className="s-hero__text">
          <div className="s-hero__header">
            <div className="sh__overflow"><p>Investissez dans le <span>solaire</span></p></div>
            <div className="sh__overflow"><p>pour un avenir radieux</p></div>
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
            heroImages.map((image, i) => (
              <Image src={image} alt="Solar Energy" fill={false} sizes='(max-width: 600px) 100%, 100%' key={`si-${i}`} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default SolarHero