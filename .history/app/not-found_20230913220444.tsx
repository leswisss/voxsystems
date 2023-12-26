"use client";

import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import arrowLeftThin from '@iconify/icons-ph/arrow-left-thin';
import "../styles/404.scss"

const NotFoundPage = () => {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [state, state2])
  return (
    <section className="not__found">
      <div className="container not__found-container">
        <div className="not-found__overflow">
          <h3>CETTE PAGE</h3>
        </div>
        <div className="not-found__overflow">
          <h3>N'EXISTE PAS</h3>
        </div>

        <div className="not__link-container">
          <Link href="/"><span><Icon icon={arrowLeftThin} /></span>RETOUR À LA PAGE D'ACCEUIL</Link>
          <Link href="/"><span><Icon icon={arrowLeftThin} /></span>RETOUR À LA PAGE PRÉCÉDENTE</Link>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage