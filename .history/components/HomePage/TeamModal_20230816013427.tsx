import React from 'react'
import { TeamDataProps, ActiveModalProps} from '@/types'

interface TeamProps {
  data: TeamDataProps,
  activeModal: ActiveModalProps,
  setActiveModal: React.Dispatch<React.SetStateAction<
}

const TeamModal = ({data}: TeamProps) => {
  return (
    <div></div>
  )
}

export default TeamModal