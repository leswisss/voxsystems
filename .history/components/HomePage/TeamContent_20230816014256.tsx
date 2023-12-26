import React from 'react'
import { TeamDataProps, ActiveTeamProps} from '@/types'
import "../"

interface TeamProps {
  data: TeamDataProps,
  activeTeam: ActiveTeamProps,
  setActiveTeam: React.Dispatch<React.SetStateAction<ActiveTeamProps>>
}

const TeamContent = ({ data, activeTeam, setActiveTeam }: TeamProps) => {
  return (
    <div>

    </div>
  )
}

export default TeamContent