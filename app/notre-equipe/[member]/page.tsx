"use client";

import { useEffect, useState } from "react";
import { MemberHero, MemberContent, Preloader } from '@/components'

const MemberPage = () => {
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
      <MemberHero state={loading2} state2={loading}/>
      <MemberContent setState={setLoading}/>
    </>
  )
}

export default MemberPage 