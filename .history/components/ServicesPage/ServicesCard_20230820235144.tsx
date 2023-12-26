import React from 'react'
import "../../styles/ServicesPage/servicescard.scss"
import IMAGE from "../../public/images/voxhero2.jpg"
import { Icon } from "@iconify/react";
import arrowUpBroken from "@iconify/icons-solar/arrow-up-broken";
import Image from 'next/image'
import { ServiceCardData } from '@/types';
import Link from 'next/link'


interface ServiceProps {
  data: ServiceCardData
}
const ServicesCard = ({ data }: ServiceProps) => {
  return (
    <div className='p-services__card'>
      <div className="p-card__back">
        <Image src={data.image} alt="Vox Image" fill={true} sizes="(max-width:600px) 100%, 100%)"/>
      </div>
      <div className="card__overlay" style={{backgroundColor:   #ffc2cc40``}}></div>
      <div className="card__content">
        <div className="content__overflow">
          <h3 className='co-header'>VOX LINK</h3>
        </div>
        <div className="card__content-main">
          <div className="content__overflow">
            <div className="c-content">
              <p>L'un de nos services phares est <span>VOX LINK</span></p>
              <h3>
                LA TECHNOLOGIE AU SERVICE DE VOTRE MAISON
              </h3>
              <p>
                Avec nos services d'installation d'energie solaire, vous pouvez
                profiter d'une energie propre et renouvelable qui est bonne pour
                l'environement.
              </p>
            </div>
          </div>
          <div className="content__overflow">
            <Link className='discover-b' href="/">DÉCOUVRIR <Icon icon={arrowUpBroken} /></Link>
          </div>
        </div>
        <Link className='p-contact' href="/contacts"><span>CONTACTEZ <br />NOUS</span></Link>  
      </div>
    </div>
  )
}

export default ServicesCard