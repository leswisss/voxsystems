"use client";

import React, {useEffect, useRef} from 'react'
import "../../styles/ServicesPage/servicescard.scss"
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
        <Image src={data.image} alt={data.text} fill={true} sizes="(max-width:600px) 100%, 100%)"/>
      </div>
      <div className="card__overlay" style={{backgroundColor:   `${data.background}`}}></div>
      <div className="card__content">
        <div className="content__overflow">
          <Link href={data.link} className='co-header'>{data.name}</Link>
        </div>
        <div className="card__content-main">
          <div className="content__overflow">
            <div className="c-content">
              <p>{data.text}</p>
              <h3>
               {data.slogan}
              </h3>
              <p>
                {data.text2}
              </p>
            </div>
          </div>
          <div className="content__overflow">
            <Link className={`discover-b ${data.outline ? "outline-b" : ""}`} href={data.link}>DÉCOUVRIR <Icon icon={arrowUpBroken} /></Link>
          </div>
        </div>
        <Link className='p-contact' href={`/contacts?service=${data.slug}`}><span>CONTACTEZ <br />NOUS</span></Link>  
      </div>
    </div>
  )
}

export default ServicesCard