import React from 'react'
import { TeamDataProps, ActiveTeamProps} from '@/types'

interface TeamProps {
  data: TeamDataProps,
  activeModal: ActiveTeamProps,
  setActiveModal: React.Dispatch<React.SetStateAction<ActiveTeamProps>>
}

const TeamModal = ({ data, activeModal, setActiveTeam }: TeamProps) => {
  return (
    <div>

    </div>
  )
}

export default TeamModal