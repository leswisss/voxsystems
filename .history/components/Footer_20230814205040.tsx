import React from 'react'
import { FooterData } from '@/utils'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div className="f-top__header">
            <div className="footer__overflow">
              <span className='f-logo'>SYSTEM<span>S</span></span>
            </div>
            <div className="footer__overflow">
              <span className='f-slogan'>Votre partenaire dans la vie intelligente</span>
            </div>
          </div>
          <div className="f-top__content">
            <div className="top__left">
              <p>
                Pour recevoir toutes les informations du groupe SYSTEMS, <br />
                inscrivez-vous à notre newsletter
              </p>

              <div className="newsletter">
                <input type="email" />
                <span>s</span>
              </div>
            </div>
            <div className="top__right">
              {
                FooterData.map((item, i) => (
                  <div className="footer__links" key={it}>
                    <h4>{item.name}</h4>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="footer__bottom">

        </div>
      </div>
    </footer>
  )
}

export default Footer