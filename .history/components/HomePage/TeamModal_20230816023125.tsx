import React from 'react'
import { TeamDataProps, ActiveTeamProps} from '@/types'
import Image from 'next/image'
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
          team.map((item) => {
            const { image } = item;
            return (
              <div className="modal">
                <Image src={}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TeamModal