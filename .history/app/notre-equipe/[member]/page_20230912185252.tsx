"use client";

import { useEffect, useState } from "react";
import { MemberHero, MemberContent, Preloader } from '@/components'

const MemberPage = () => {
  return (
    <>
      <MemberHero />
      <MemberContent />
    </>
  )
}

export default MemberPage 