import React, {useEffect, useState} from 'react'
import { SolarHero } from '@/components'

const SolarPage = () => {
  const [activeImage, setActiveImage] = useState
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <>
    
    </>
  )
}

export default SolarPage