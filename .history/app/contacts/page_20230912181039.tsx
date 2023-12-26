"use client";

import { useEffect, useState } from "react";
import { ContactHero, Preloader } from '@/components'

const ContactPage = () => {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading2(false)
    }, 1500)    

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      <Preloader/>
      <ContactHero />
    </>
  )
}

export default ContactPage