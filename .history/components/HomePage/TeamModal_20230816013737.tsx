import React from 'react'
import { TeamDataProps, ActiveTeamProps} from '@/types'

interface TeamProps {
  data: TeamDataProps,
  activeModal: ActiveModalProps,
  setActiveModal: React.Dispatch<React.SetStateAction<ActiveModalProps>>
}

const TeamModal = ({ data, activeModal, setActiveModal }: TeamProps) => {
  return (
    <div>

    </div>
  )
}

export default TeamModal