import React, {useState} from 'react'
import { FooterData } from '@/utils'
import Link from 'next/link'
import "../styles/footer.scss"

const Footer = () => {
  const year = new Date().getFullYear()
  const [emailValue, setEmailValue] = useState("");

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
            <div className="f-top__left">
              <p>
                Pour recevoir toutes les informations du groupe SYSTEMS, <br />
                inscrivez-vous à notre newsletter
              </p>

              <div className="newsletter">
                <input type="email" />
                <span>s</span>
              </div>
            </div>
            <div className="f-top__right">
              {
                FooterData.map((item, i) => (
                  <div className="footer__links" key={item.id}>
                    <h4>{item.name}</h4>

                    <div className="f-links__container">
                      {
                        item.links.map((link, i) => (
                          <Link key={link.id} href={link.href}>{link.name}</Link>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="f-bottom__left">
            &copy; SYSTEMS { year } TOUS DROITS RESÉRVÉS
          </div>
          <div className="f-bottom__right">
            <Link href="/politique-de-cookies">POLITIQUE DE COOKIES</Link>
            <Link href="/termes-conditions">TERMES ET CONDITIONS</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer