import React from 'react'

interface SideProps {
  activeSide: boolean;
  setActiveSide: (value: boolean) => void
}

const SideBar = ({ activeSide, setActiveSide }: SideProps) => {

  return (
    <>
    <motion.div className='sidebar' variants={sideBarAnim} initial="initial" animate="entry" exit="exit">
      <div className="sidebar__container">
        <div className='sidebar__wrapper'>
          <div className="side__shop">
            <h2>Menu</h2>
            <div className='menu__wrapper'>
              {
                shopData.map((item) => (
                  <React.Fragment key={item.id}>
                    <span className="nav__linker"><Link href="/">{item.name}</Link></span>
                  </React.Fragment>
                ))
              }
            </div>
          </div>
          <div className="side__navigate">
            <h2>Account</h2>
            <div className='account__wrapper'>
              <span className="nav__link"><Link href="/">SEARCH</Link></span>
              <span className="nav__link"><Link href="/">MY ACCOUNT</Link></span>    
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    <motion.div variants={sideMaskAnim} initial="initial" animate="entry" exit="exit" className="side__mask"></motion.div>
    </>
  )
}

export default SideBar