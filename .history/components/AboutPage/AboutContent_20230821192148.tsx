import React from 'react'
import { AboutPageData } from '@/utils'


const AboutContent = () => {
  return (
    <section className="about__content">
      <div className="container about__container">
        {
          AboutPageData.map((item) => (

          ))
        }
      </div>
    </section>
  )
}

export default AboutContent