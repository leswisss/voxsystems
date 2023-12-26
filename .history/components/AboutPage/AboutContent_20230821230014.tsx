import React from 'react'
import { AboutPageData } from '@/utils'


const AboutContent = () => {
  return (
    <section className="about__content">
      <div className="container about__container">
        {
          AboutPageData.map((item, i) => (
            <div className="acontent__wrapper" key={`ac-${i}`}>
              <div className="acontent__text">
                <div className="acontent__overflow">
                  <h3>{item.name}</h3>
                </div>
                <span></span>
                {
                  item.normal?(
                    <div className="a-text">
                      <p>{item.}</p>
                    </div>
                  ):(

                  )
                }
              </div>
              <div className="acontent__image">

              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default AboutContent