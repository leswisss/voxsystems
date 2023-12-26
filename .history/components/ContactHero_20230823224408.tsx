"use client";

import React, {useEffect} from 'react'
import Image from 'next/image'
import { VoxContact } from '.';
import IMAGE from "../public/images/contactimage.jpg"
import "../styles/contact.scss"

const ContactHero = () => {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <section className="contact__hero">
      <div className="contact__image">
        <Image src={IMAGE} alt="Contact Background" fill={true} sizes='(max-width: 600px) 100%, 100%' />
      </div>
      <div className="chero__contact">
        <VoxContact email='voxlink@gmail.com'/>
      </div>
    </section>
  )
}

export default ContactHero