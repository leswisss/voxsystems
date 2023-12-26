import React from 'react'
import "../../styles/ServicesPage/servicescard.scss"
import Link from 'next/link'

const ServicesCard = () => {
  return (
    <div className='p-services__card' style={{backg}}>
      <div className="card__overlay"></div>
      <div className="card__content">
        <div className="content__overflow">
          <h3>VOX LINK</h3>
        </div>
        <div className="card__content-main">
          <div className="content__overflow">
            <div className="c-content">
              <p>L'un de nos services phares est <span>VOX LINK</span></p>
              <h3>
                LA TECHNOLOGIE AU SERVICES DE VOTRE MAISON
              </h3>
              <p>
                Avec nos services d'installation d'energie solaire, vous pouvez
                profiter d'une energie propre et renouvelable qui est bonne pour
                l'environement.
              </p>
            </div>
          </div>
          <div className="content__overflow">
            <Link href="/">DÉCOUVRIR</Link>
          </div>
        </div>
        <Link href="/contacts"><span>CONTACTEZ <br />NOUS</span></Link>  
      </div>
    </div>
  )
}

export default ServicesCard