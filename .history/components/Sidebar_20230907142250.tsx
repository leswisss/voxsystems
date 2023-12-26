import React from 'react'
import Link from 'next/link';
import { sideBarAnim, sideMaskAnim, topBurgerAnim, bottomBurgerAnim} from '@/animations';
import "../styles/sidebar.scss"
import {motion} from "framer-motion"
import { SideBarData } from '@/utils';


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
            {
              SideBarData.map((item, i) => (
                <div className="s-link__wrap" key={`sl-${i}`}>
                  <Link href={item.href} onClick={() => setActiveSide(false)}>{item.name}</Link>
                </div>
              ))
            }
            
          </div>
        </div>
        <div className="sidebar__footer">
          <span className="sidebar__header">
            RÉSEAUX SOCIAUX
          </span>
          <div className="sidebar__socials">
            <Link href="/">INSTAGRAM</Link>
            <Link href="/">FACEBOOK</Link>
            <Link href="/">TWITTER</Link>
            <Link href="/">LINKEDIN</Link>
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