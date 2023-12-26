"use client";

import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import SideBar from './Sidebar';
import "../../styles/navbar.scss"
import { burgerAnim, topBurgerAnim, bottomBurgerAnim } from '@/animations';
import {motion, AnimatePresence} from "framer-motion"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Navbar = () => {
  const [activeBurger, setActiveBurger] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(Scr)
  }, [])
  return (
    <>
    <header className='navigation'>
      <div className="container navigation__container">
        <div className="navbar">
          <Link href="/" className='logo'>
            SYSTEM<span>S</span>
          </Link>

          <div className="left__section">
            <span className=''>
              PARLONS
            </span>
            <motion.div className="burger__menu" onClick={() => setActiveBurger((prev) => !prev)} variants={burgerAnim} animate={activeBurger ? "entry" : "initial"}>
              <motion.span variants={topBurgerAnim} animate={activeBurger? "entry" : "initial"} className='top-burger'></motion.span>
              <motion.span variants={bottomBurgerAnim} animate={activeBurger? "entry" : "initial"} className='bottom-burger'></motion.span>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
    <AnimatePresence mode='wait'>
      {activeBurger && <SideBar activeSide={activeBurger} setActiveSide={setActiveBurger}/>}
    </AnimatePresence>
    </>
  )
}

export default Navbar