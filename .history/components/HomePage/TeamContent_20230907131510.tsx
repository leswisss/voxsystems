"use client";

import React from 'react'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { TeamDataProps, ActiveTeamProps} from '@/types'
import "../../styles/LandingPage/teamdata.scss"
import Link from 'next/link'


interface TeamProps {
  data: TeamDataProps,
  activeTeam: ActiveTeamProps,
  setActiveTeam: React.Dispatch<React.SetStateAction<ActiveTeamProps>>
}

const TeamContent = ({ data, activeTeam, setActiveTeam}: TeamProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <Link href="/notre-equipe/swiss" className='team-data__container' key={`td-${data.id}`} onMouseEnter={() => setActiveTeam({ active: true, index: data.id-1 })} onMouseLeave={() => setActiveTeam({ active: false, index: data.id-1 })}>
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