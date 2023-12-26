import React from 'react'
import Link from 'next/link';
import { sideBarAnim, sideMaskAnim } from '@/animations';
import "../styles/sidebar.scss"
import {motion} from "framer-motion"
import { topBurgerAnim, bottomBurgerAnim } from '@/animations';


interface SideProps {
  activeSide: boolean;
  setActiveSide: React.Dispatch<React.SetStateAction<boolean>>
}

const SideBar = ({ activeSide, setActiveSide }: SideProps) => {

  return (
    <>
    <motion.div className='sidebar' variants={sideBarAnim} initial="initial" animate="entry" exit="exit">
      <div className="sidebar__container">
        <div className="sidebar__content">
          <span className="sidebar__header">
            NAVIGATION
          </span>

          <div className="sidebar__links">
            <Link href="/">ACCEUIL</Link>
            <Link href="/services">SERVICES</Link>
            <Link href="/a-propos">À PROPOS</Link>
            <Link href="/contacts">CONTACTs</Link>
          </div>
        </div>
        <div className="sidebar__footer">
          <span className="sidebar__header">
            SOCIALS
          </span>
          <div className="sidebar__socials">
            <Link href="/">INSTAGRAM</Link>
            <Link href="/">FACEBOOK</Link>
            <Link href="/">TWITTER</Link>
            <Link href="/">LINKEND</Link>
          </div>
        </div>
        <div className="s-burger__menu" onClick={() => setActiveSide((prev) => !prev)}>
          <motion.span variants={topBurgerAnim} animate={activeSide? "entry" : "initial"} exit="initial" className='s-top-burger'></motion.span>
          <motion.span variants={bottomBurgerAnim} animate={activeSide? "entry" : "initial"} exit="initial" className='s-bottom-burger'></motion.span>
        </div>
      </div>
    </motion.div>
    <motion.div variants={sideMaskAnim} initial="initial" animate="entry" exit="exit" className="side__mask"></motion.div>
    </>
  )
}

export default SideBar