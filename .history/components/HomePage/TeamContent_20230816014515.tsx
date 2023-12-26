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
    <div className='team-data__container'>
      <div className="user__status">
        <span>{data.post}</span>
      </div>
      <div className="user__name-status">
        <div className="user__name"></div>
        <div className="user__name"></div>
      </div>
    </div>
  )
}

export default TeamContent