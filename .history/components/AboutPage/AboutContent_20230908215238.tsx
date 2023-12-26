"use client";

import React, {useRef, useEffect} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { AboutPageData } from '@/utils'
import Link from 'next/link'
import Image from 'next/image'
import "../../styles/AboutPage/aboutcontent.scss"


const AboutContent = () => {
  const imageRef = [0,1,2,3].map(() => useRef(null))
  const imageContainerRef = [0,1,2,3].map(() => useRef(null))
  const textRef = [0,1,2,3].map(() => useRef(null))

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    imageContainerRef.forEach((imgCon, i) => {
      gsap.from(imageRef[i].current, {
        scrollTrigger: {
          trigger: imgCon.current,
          start: "top+=200px bottom",
          end: "bottom+=100px bottom"
        }
      })
    })
  })


  return (
    <section className="about__content">
      <div className="container a-about__container">
        {
          AboutPageData.map((item, i) => (
            <div className="acontent__wrapper" key={`ac-${i}`}>
              <div className="acontent__text">
                <div className="acontent__overflow">
                  <h3>{item.name}</h3>
                </div>
                <span className='a-line'></span>
                {
                  item.normal?(
                    <div className="a-text" ref={textRef[i]}>
                      <p>{item.text} <br /> {item.text2}</p>
                    </div>
                  ):(
                    <>
                      <div className="a-text">
                        <p>{item.text}</p>
                      </div>
                      <span className='a-hashtag'>{item.hastag}</span>
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
              <div className="acontent__image" ref={imageContainerRef[i]}>
                <Image src={item.image} alt={item.name} fill={true} sizes='(max-width: 600px) 100%, 100%' ref={imageRef[i]}/>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default AboutContent