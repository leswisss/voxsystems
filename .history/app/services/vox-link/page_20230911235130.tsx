"use client";
import { useEffect, useState } from "react";
import { VoxHero, VoxAbout, VoxParallax, VoxServices, VoxContact } from '@/components'

const VoxPage = () => {
  return (
    <>
      <VoxHero />
      <VoxAbout />
      <VoxParallax />
      <VoxServices />
      <VoxContact email="info@voxlink.com"/>
    </>
  )
}

export default VoxPage