import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from "@iconify/react";
import arrowUpBroken from "@iconify/icons-solar/arrow-up-broken";
import IMAGE from "../../public/images/accordion.jpg"
import "../../styles/SolarPage/solaraccordion.scss"

const SolarAccordion = () => {
  return (
    <div className="accordion__wrapper">
      <div className="accordion__header">
        <span>01</span>
        <span className="ssa__header">RÉSIDENTIELS</span>
      </div>
      <div className="accordion__content">
        <div className="ac__container">
          <div className="ac__image">
            <Image src={IMAGE} alt="Nos services" fill={true} sizes="(max-width: 600px) 100%, 100%"/>
          </div>
          <div className="ac__text">
            <p>

            </p>
            <Link href="/">CONTACTEZ NOUS </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolarAccordion