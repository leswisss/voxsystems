import React from 'react'
import { TeamDataProps, ActiveTeamProps} from '@/types'

interface TeamProps {
  data: TeamDataProps,
  activeTeam: ActiveTeamProps,
  setActiveTeam: React.Dispatch<React.SetStateAction<ActiveTeamProps>>
}

const TeamModal = ({ data, activeTeam, setActiveTeam }: TeamProps) => {
  return (
    <div>

    </div>
  )
}

export default TeamModal