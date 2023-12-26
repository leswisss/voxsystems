import React from 'react'
import { Icon } from '@iconify/react';
import quotesIcon from '@iconify/icons-el/quotes';

const Testimonial = () => {
  return (
    <section className="team__testimonial">
      <div className="container ttest__container">
        <Icon icon={quotesIcon} />

        <div className="test__text">
          <div className="test__overflow">
            <p>“La meilleure partie de mon travail est de pouvoir dire</p>
          </div>
          <div className="test__overflow">
            <p>aux clients potentiels: Vous adorerez travailler avec</p>
          </div>
          <div className="test__overflow">
            <p>notre équipe’, et de savoir que c’est la vérité.”</p>
          </div>
          <div className="test__overflow">
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial