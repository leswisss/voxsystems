import React from 'react'
import Image from 'next/image'
import { ServicePageData } from '@/utils'
import "../../styles/TeamPage/"

const TeamContact = () => {
  return (
    <section className="team__contact">
      <div className="container tc__container">
        <div className="tc__overflow">
          <div className="tc__header">
            VOULEZ-VOUS NOUS PARLER DE VOTRE
          </div>
        </div>
        <div className="tc__overflow">
          <div className="tc__header">
            PROJET OU AVEZ-VOUS BESOIN DE SUPPORT?
          </div>
        </div>
        <div className="tc__overflow">
          <p>Notre équipe est prête à vous aider!</p>
        </div>

        <div className="contact__links">
          {
            ServicePageData.map(() => (
              <div className="contact__link">
                <div className="link__image"></div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default TeamContact