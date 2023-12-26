import React, {use} from 'react'
import { SolarHero } from '@/components'

useEffect(() => {
  (
    async () => {
      const LocomotiveScroll = (await import ('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    }
  )()
}, [])

const SolarPage = () => {

  return (
    <>
    
    </>
  )
}

export default SolarPage