import React, {useEffect} from 'react'
import { SolarHero } from '@/components'

const SolarPage = () => {
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