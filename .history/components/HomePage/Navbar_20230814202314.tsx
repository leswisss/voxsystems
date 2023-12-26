"use client";

import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import SideBar from './Sidebar';
import "../../styles/navbar.scss"
import { topBurgerAnim, bottomBurgerAnim } from '@/animations';
import {motion, AnimatePresence} from "framer-motion"


const Navbar = () => {
  const [activeBurger, setActiveBurger] = useState(false)

  
  return (
    <>
    <header className='navigation'>
      <div className="container navigation__container">
        <div className="navbar">
          <Link href="/" className='logo'>
            SYSTEM<span>S</span>
          </Link>

          <div className="left__section">
            <span className='nav__cta'>
              Parlons
            </span>
            <div className="burger__menu" onClick={() => setActiveBurger((prev) => !prev)}>
              <motion.span variants={topBurgerAnim} animate={activeBurger? "entry" : "initial"} initial="initial" className='top-burger'></motion.span>
              <motion.span variants={bottomBurgerAnim} animate={activeBurger? "entry" : "initial"} initial="initial" className='bottom-burger'></motion.span>
            </div>
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