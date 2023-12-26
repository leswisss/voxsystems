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
        <div className="side__content">
          span.
        </div>
      </div>
    </motion.div>
    <motion.div variants={sideMaskAnim} initial="initial" animate="entry" exit="exit" className="side__mask"></motion.div>
    </>
  )
}

export default SideBar