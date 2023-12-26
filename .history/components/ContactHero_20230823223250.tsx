import React from 'react'
import Image from 'next/image'
import IMAGE from "../public/images/contactimage.jpg"
import "../styles/contact.scss"

const ContactHero = () => {
  return (
    <section className="contact__hero">
      <div className="contact__image">
        <Image src={IMAGE} alt="" />
      </div>
    </section>
  )
}

export default ContactHero