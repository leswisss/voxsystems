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
          <div className="circle__loader">
            <div className="circle__loader-2">

            </div>
          </div>
          <div className="vision__content">
            <div className="vision__overflow">
              <h3>NOTRE <span>VISION</span></h3>
            </div>
            div.vision_
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision