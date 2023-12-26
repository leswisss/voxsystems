"use client";

import React from 'react'
import { AccordionDataProps } from '@/types';
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from "@iconify/react";
import angleDown from '@iconify/icons-la/angle-down';
import arrowUpBroken from "@iconify/icons-solar/arrow-up-broken";
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
          <span>0{current + 1}</span>
          <span className="ssa__header">{data.name}</span>
        </div>
        <Icon icon={angleDown} style={{transform: current===state ? "rotate(180deg)" : ""}}/>
      </div>
      <div className={`accordion__content ${current===state ? "active_s-accordion" : ""}`}>
        <div className="ac__container">
          <div className="ac__image">
            <Image src={data.image} alt={`Nos services ${data.name}`} fill={true} sizes="(max-width: 600px) 100%, 100%"/>
          </div>
          <div className="ac__text">
            <p>
              {data.text}
            </p>
            <Link href="/contacts?service=solar">CONTACTEZ NOUS <Icon icon={arrowUpBroken} /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolarAccordion