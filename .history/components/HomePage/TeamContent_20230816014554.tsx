import React from 'react'
import { TeamDataProps, ActiveTeamProps} from '@/types'
import "../../styles/LandingPage/teamdata.scss"

interface TeamProps {
  data: TeamDataProps,
  activeTeam: ActiveTeamProps,
  setActiveTeam: React.Dispatch<React.SetStateAction<ActiveTeamProps>>
}

const TeamContent = ({ data, activeTeam, setActiveTeam }: TeamProps) => {
  return (
    <div className='team-data__container' key={}>
      <div className="user__status">
        <span>{data.post}</span>
      </div>
      <div className="user__name-status">
        <div className="user__name">{data.name}</div>
        <div className="user__status-2">{data.post2}</div>
      </div>
    </div>
  )
}

export default TeamContent