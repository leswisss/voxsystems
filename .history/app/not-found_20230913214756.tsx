

import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import arrowLeftThin from '@iconify/icons-ph/arrow-left-thin';

const NotFoundPage = () => {
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
          <Link href="/"><span></span></Link>
        </div>
        
      </div>
    </section>
  )
}

export default NotFoundPage