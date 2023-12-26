import React from 'react'
import { TeamDataProps, ActiveTeamProps} from '@/types'

interface TeamProps {
  data: TeamDataProps,
  activeModal: ActiveProps,
  setActiveModal: React.Dispatch<React.SetStateAction<ActiveProps>>
}

const TeamModal = ({ data, activeModal, setActiveModal }: TeamProps) => {
  return (
    <div>

    </div>
  )
}

export default TeamModal