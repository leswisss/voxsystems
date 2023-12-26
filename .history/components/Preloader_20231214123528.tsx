"use client";

import React from 'react'
import {preloaderTextAnim, preloaderText2Anim, preloaderAnim, preloaderHAnim } from '@/animations'
import { usePathname } from 'next/navigation';
import {motion} from "framer-motion"
import "../styles/preloader.scss"

const Preloader = ({state, state2, isInitial}: {state: boolean, state2: boolean, isInitial?: boolean}) => {
  const systems = "SYSTEMS"
  const array = systems.split("")
  const slogan = "VOTRE PARTENAIRE DANS LA VIE INTELLIGENTE"
  const array2 = slogan.split(" ")
  const pathname = usePathname()
  
  
  return (
    <motion.section variants={preloaderAnim} animate={!(!state && !state2) ? "initial" : "exit" } className='preloader'>
      <div className="loading__screen">
        <div className="home__active" style={{display: pathname==="/" && isInitial ? "block" : "none"}}>
          <div className="preload__overflow">
            <h3>
              {
                array.map((letter, i) => (
                  <motion.span variants={preloaderTextAnim} custom={i} initial="initial" animate="entry" exit="exit" key={`sy${i}`}>{letter}</motion.span>
                ))
              }
            </h3>
          </div>
          <div className="preload__overflow">
            <p>
            {
                array2.map((word, i) => (
                  <motion.span variants={preloaderText2Anim} custom={i} initial="initial" animate="entry" exit="exit" key={`w${i}`}>{word}</motion.span>
                ))
              }
            </p>
          </div>
        </div>
        <motion.h2 style={{display: pathname==="/" && !isInitial ? "block" : "none"}}>ACCEUIL</motion.h2>
        <motion.h2 variants={preloaderHAnim} initial="initial" animate={!(!state && !state2) ? "entry" : "exit"} style={{display: pathname==="/services" ? "block" : "none"}}>SERVICES</motion.h2>
        <motion.h2 variants={preloaderHAnim} initial="initial" animate={!(!state && !state2) ? "entry" : "exit"} style={{display: pathname==="/a-propos-de-nous" ? "block" : "none"}}>A PROPOS DE NOUS</motion.h2>
        <motion.h2 variants={preloaderHAnim} initial="initial" animate={!(!state && !state2) ? "entry" : "exit"} style={{display: pathname==="/contacts" ? "block" : "none"}}>CONTACT</motion.h2>
        <motion.h2 variants={preloaderHAnim} initial="initial" animate={!(!state && !state2) ? "entry" : "exit"} style={{display: pathname==="/services/vox-link" ? "block" : "none"}}>VOX LINK</motion.h2>
        <motion.h2 variants={preloaderHAnim} initial="initial" animate={!(!state && !state2) ? "entry" : "exit"} style={{display: pathname==="/services/solar" ? "block" : "none"}}>SOLAR</motion.h2>
        <motion.h2 variants={preloaderHAnim} initial="initial" animate={!(!state && !state2) ? "entry" : "exit"} style={{display: pathname==="/notre-equipe" ? "block" : "none"}}>NOTRE EQUIPE</motion.h2>
        <motion.h2 variants={preloaderHAnim} initial="initial" animate={!(!state && !state2) ? "entry" : "exit"} style={{display: pathname.includes("/notre-equipe/") ? "block" : "none"}}>SCHNEIDER</motion.h2>
      </div>
    </motion.section>
  )
}

export default Preloader