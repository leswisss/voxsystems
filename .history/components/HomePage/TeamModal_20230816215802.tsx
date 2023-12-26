"use client";

import React, { useEffect, useRef } from 'react'
import { TeamDataProps, ActiveTeamProps} from '@/types'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"
import { scaleAnimation } from '@/animations'
import { gsap } from 'gsap'
import Link from 'next/link';
import "../../styles/LandingPage/teammodal.scss"


interface ModalProps{
  team: TeamDataProps[],
  activeModal: ActiveTeamProps
}
const TeamModal = ({team , activeModal}: ModalProps) => {

  const { active, index } = activeModal;
  const modalRef = useRef(null)
  const cursorRef = useRef(null)


  useEffect(() => {
    //Move Container
    xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
    //Move cursor
    xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
  }, [])
  return (
    <>
    <motion.div variants={scaleAnimation} initial="initial" animate={active ? "entry" : "exit"} className="modal__container" ref={modalRef}>
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
    <motion.div variants={scaleAnimation} initial="initial" animate={active ? "entry" : "exit"} className="cursor" ref={cursorRef}>
      <Link href="/" className="cursor__label">VOIR</Link>
    </motion.div>
    </>
  )
}

export default TeamModal