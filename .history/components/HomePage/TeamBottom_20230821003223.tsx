"use client";

import React, { useState } from 'react'
import { Icon } from "@iconify/react"
import { TeamData } from "@/utils";
import TeamContent from "./TeamContent";
import "../../styles/LandingPage/teambottom"
import TeamModal from "./TeamModal";
import Link from 'next/link'

const TeamBottom = () => {
  const [activeTeam, setActiveTeam] = useState({ active: false, index: 0 });

  return (
    <div className="team__bottom">
      <div className="t-bottom__header">
        <div></div>
        <div className="team__bottom-header">
          <span>L'EQUIPE</span>
          <Link href="/notre-equipe">VOIR PLUS <Icon icon="solar:arrow-up-broken"/></Link>
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
    </div>
  )
}

export default TeamBottom