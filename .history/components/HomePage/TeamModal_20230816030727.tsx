import React from 'react'
import { TeamDataProps, ActiveTeamProps} from '@/types'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"
import { scaleAnimation } from '@/animations'
import "../../styles/LandingPage/teammodal.scss"


interface ModalProps{
  team: TeamDataProps[],
  activeModal: ActiveTeamProps
}
const TeamModal = ({team , activeModal}: ModalProps) => {
  const {active, index} = activeModal;

  return (
    <motion.div variants={scaleAnimation} initial="initial" animate={acti} className="modal__container">
      <div className="modal__slider" style={{ transform: `translateY(${-index*100}%)`}}>
        {
          team.map((item) => {
            const { image, id , name} = item;
            return (
              <div className="modal" key={id}>
                <Image src={image} alt={name} fill={true}/>
              </div>
            )
          })
        }
      </div>
    </motion.div>
  )
}

export default TeamModal