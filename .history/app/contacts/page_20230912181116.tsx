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
      <Preloader state2={loading2} state={loading}/>
      <ContactHero setState={setLoading} state={loading2} state2={loading}/>
    </>
  )
}

export default ContactPage