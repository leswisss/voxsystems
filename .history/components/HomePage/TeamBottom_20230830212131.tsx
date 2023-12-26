"use client";

import React, { useState } from 'react'
import { Icon } from "@iconify/react"
import { TeamData } from "@/utils";
import TeamContent from "./TeamContent";
import arrowUpBroken from "@iconify/icons-solar/arrow-up-broken";
import "../../styles/LandingPage/teambottom.scss"
import TeamModal from "./TeamModal";
import Link from 'next/link'

const TeamBottom = ({ homePg } : { homePg: boolean }) => {
  const [activeTeam, setActiveTeam] = useState({ active: false, index: 0 });

  return (
    <div className="team__bottom">
      <div className="t-bottom__header">
        <div></div>
        <div className="team__bottom-header">
          <span>L'EQUIPE</span>
          {homePg && <Link href="/notre-equipe">VOIR PLUS <Icon icon={arrowUpBroken}/></Link>}
        </div>
      </div>
      <div className="t-bottom__content">
        {
          TeamData.map((data, i) => (
            <TeamContent data={data} activeTeam={activeTeam} setActiveTeam={setActiveTeam} key={`t-${i}`}/>
          ))
        }
        <TeamModal team={TeamData} activeModal={activeTeam}/>
      </div>
      <div className="mobile__content">
        {
          TeamData.map((item, i) => (
            <div className="content__card">
          <div className="ci__image">
            <Image src={} alt={} fill={true} sizes="(max-width: 600px) 100%, 100%"/>
          </div>
          <div className="card__name">
            <p>{}</p>
          </div>
          <div className="card__position">
            <div className="cp__overflow">{}</div>
            <div className="cp__overflow">{}</div>
          </div>
        </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default TeamBottom