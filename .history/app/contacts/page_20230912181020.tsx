"use client";

import { useEffect, useState } from "react";
import { ContactHero, Preloader } from '@/components'

const ContactPage = () => {
  return (
    <>
    <Preloader/>
      <ContactHero />
    </>
  )
}

export default ContactPage