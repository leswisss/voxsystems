"use client";

import React, {useState} from 'react'
import { AccordionDataProps } from '@/types';
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from "@iconify/react";
import arrowUpBroken from "@iconify/icons-solar/arrow-up-broken";
import IMAGE from "../../public/images/accordion.jpg"
import "../../styles/SolarPage/solaraccordion.scss"


interface AccordionProps{
  data: AccordionDataProps,
  state: number,
  setState: React.Dispatch<React.SetStateAction<number>>,
  current: number
}

const SolarAccordion = ({data, state, setState, current}: AccordionProps) => {

  return (
    <div className="accordion__wrapper">
      <div className="accordion__header" onClick={() => {
        if (state === current) {
          setState(-1)
        } else {
          setState(current)
        }
      }}>
        <div className='accordion-h'>
          <span>0{data.}</span>
          <span className="ssa__header">RÉSIDENTIELS</span>
        </div>
        <Icon icon={arrowUpBroken} />
      </div>
      <div className="accordion__content">
        <div className="ac__container">
          <div className="ac__image">
            <Image src={IMAGE} alt="Nos services" fill={true} sizes="(max-width: 600px) 100%, 100%"/>
          </div>
          <div className="ac__text">
            <p>
              Pour les grandes entreprises, nous comprenons l'importance de solutions énergétiques fiables et rentables. Nos systèmes de panneaux solaires commerciaux sont conçus pour offrir un retour sur investissement élevé en réduisant les coûts énergétiques et en augmentant l'indépendance énergétique.
            </p>
            <Link href="/">CONTACTEZ NOUS <Icon icon={arrowUpBroken} /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolarAccordion