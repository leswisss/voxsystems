import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ServicePageData } from '@/utils'
import "../../styles/TeamPage/tcontact.scss"

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
            ServicePageData.map((item, i) => (
              <Link href={`/contacts?service=${}`} className="contact__link" key={`cl-${i}`}>
                <div className="link__image">
                  <Image src={item.image} alt={`${item.name} contact`} sizes='(max-width: 600px) 100%, 100%' fill={true}/>
                </div>
                <span >{item.name} contact</span>
              </Link>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default TeamContact