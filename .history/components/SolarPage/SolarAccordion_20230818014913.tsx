import React from 'react'
import Image from 'next/image'
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
            <Image src={IMAGE} alt=""/>
          </div>
          <div className="ac__text"></div>
        </div>
      </div>
    </div>
  )
}

export default SolarAccordion