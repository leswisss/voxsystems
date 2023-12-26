import React from 'react'
import { TeamDataProps, ActiveTeamProps} from '@/types'
import "../../styles/LandingPage/teammodal.scss"


interface ModalProps{
  team: TeamDataProps[],
  activeModal: ActiveTeamProps
}
const TeamModal = ({team , activeModal}: ModalProps) => {
  return (
    <div className="modal__container">
      <div className="modal__slider">
        {
          team.map(() => {
            return (
              <div className="modal">
                
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TeamModal