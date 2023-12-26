import React from 'react'
import Image from 'next/image'
import IMAGE from "../../"
import "../styles/contact.scss"

const ContactHero = () => {
  return (
    <section className="contact__hero">
      <div className="contact__image">
        <Image />
      </div>
    </section>
  )
}

export default ContactHero