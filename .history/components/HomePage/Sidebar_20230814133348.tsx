import React from 'react'
import Link from 'next/link';
import { sideBarAnim, sideMaskAnim } from '@/animations';

interface SideProps {
  activeSide: boolean;
  setActiveSide: (value: boolean) => void
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
            
          </div>
        </div>
      </div>
    </motion.div>
    <motion.div variants={sideMaskAnim} initial="initial" animate="entry" exit="exit" className="side__mask"></motion.div>
    </>
  )
}

export default SideBar