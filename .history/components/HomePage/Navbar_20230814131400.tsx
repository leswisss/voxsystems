import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
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
            <div className="burger">
              --
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar