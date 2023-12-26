

import React from 'react'
import { SolarHero, SolarAbout, VoxContact, SolarServices } from '@/components'
import LocomotiveScroll from 'locomotive-scroll';

const SolarPage = () => {

  // useEffect(() => {
  //   (
  //     async () => {
  //       const LocomotiveScroll = (await import ('locomotive-scroll')).default;
  //       const locomotiveScroll = new LocomotiveScroll();
  //     }
  //   )()
  // }, [])

  const scroll = new LocomotiveScroll();

  return (
    <>
      <SolarHero />
      <SolarAbout />
      <SolarServices />
      <VoxContact email="info@solar.com"/>
    </>
  )
}

export default SolarPage