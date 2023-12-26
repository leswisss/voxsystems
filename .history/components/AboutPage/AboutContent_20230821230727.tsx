import React from 'react'
import { AboutPageData } from '@/utils'
import Link from 'next/link'
import Image from 'next/image'


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
                      <p>{item.text} <br /> {item.text2}</p>
                    </div>
                  ):(
                    <>
                      <div className="a-text">
                        <p>{item.text}</p>
                      </div>
                      <span>{item.hastag}</span>
                      <div className="a-links__container">
                        {
                          item.links?.map((link, i) => (
                            <Link key={`li-${i}`} href={link.href}>{link.name}</Link>
                          ))
                        }
                      </div>
                    </>
                  )
                }
              </div>
              <div className="acontent__image">
                <Image src={item.image} alt={i}/>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default AboutContent