import React from 'react'
import "../../styles/LandingPage/vision.scss"
import Image from 'next/image'
import IMAGE from "../../public/images/vision.jpg"

const Vision = () => {
  return (
    <section className="vision">
      <div className="container vision__container">
        <div className="vision__image">
          <Image src={IMAGE} alt="Notre Vision" fill={false}/>
        </div>
        <div className="vision__content">
          <div className="citcle__loader">
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision