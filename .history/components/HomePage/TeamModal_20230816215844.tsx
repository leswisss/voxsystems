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
    let xMoveContainer = gsap.quickTo(modalRef.current, "left", {duration: 0.8, ease: "power3"})
    let yMoveContainer = gsap.quickTo(modalRef.current, "top", {duration: 0.8, ease: "power3"})
    //Move cursor
    let xMoveCursor = gsap.quickTo(cursorRef.current, "left", {duration: 0.5, ease: "power3"})
    let yMoveCursor = gsap.quickTo(cursorRef.current, "top", {duration: 0.5, ease: "power3"})

    win
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