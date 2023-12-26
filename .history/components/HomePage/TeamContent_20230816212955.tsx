"use client";

import React from 'react'
import { TeamDataProps, ActiveTeamProps} from '@/types'
import "../../styles/LandingPage/teamdata.scss"
import Link from 'next/link'


interface ManageModal {
  (active: boolean, index: number, x: number , y: number): void;
}

interface TeamProps {
  data: TeamDataProps,
  activeTeam: ActiveTeamProps,
  setActiveTeam: React.Dispatch<React.SetStateAction<ActiveTeamProps>>
  manageModal: ManageModal
}

const TeamContent = ({ data, activeTeam, setActiveTeam, manageModal}: TeamProps) => {
  return (
    <Link href="/" className='team-data__container' key={data.id} onMouseEnter={(e) => {manageModal(true, data.id - 1, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, data.id - 1, e.clientX, e.clientY)}} >
      <div className="user__status">
        <span>{data.post}</span>
      </div>
      <div className="user__name-status">
        <div className="user__name">{data.name}</div>
        <div className="user__status-2">{data.post2}</div>
      </div>
    </Link>
  )
}

export default TeamContent