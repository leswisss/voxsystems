"use client";

import React, {useState} from 'react'
import SolarAccordion from './SolarAccordion'
import { SolarAccordionData } from '@/utils'
import "../../styles/SolarPage/solarservices.scss"

const SolarServices = () => {
  const [activeAccordion, setActiveAccordion] = useState({active: true, slected: 0})

  return (
    <section className="solar__services">
      <div className="container ss__container">
        <div className="ss__left">
          <div className="ss__overflow">
            <h3>NOTRE <span>VISION</span></h3>
          </div>
          <div className="ss__overflow">
            <p>
              Notre engagement en faveur de la durabilité est au cœur de tout ce que nous faisons. Nous croyons en l'exploitation de la puissance du soleil pour fournir une énergie propre et renouvelable pour un avenir plus radieux. Notre objectif est de rendre l'énergie solaire accessible et abordable pour tous, et nous sommes dédiés à fournir des services d'installation, de maintenance et de réparation de panneaux solaires de qualité supérieure.
            </p>
          </div>
        </div>
        <div className="ss__right">
          <div className="ss__overflow">
            <h3>NOS <span>SOLUTIONS</span></h3>
          </div>
          <div className="accordion__container">
            {
              SolarAccordionData.map((item, i) => (
                <SolarAccordion key={`sac-${i}`} data={item} activeAccordion={activeAccordion} setActiveAccordion={setActi}/>
              ))
            }
            <SolarAccordion />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolarServices