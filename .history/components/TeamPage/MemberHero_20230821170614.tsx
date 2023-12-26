import React from 'react'

const MemberHero = () => {
  return (
    <section className="member">
      <div className="container member__container">
        <div className="name__container">
        <div className="member__overflow">
          <h3>BAFRI</h3>
        </div>
        <div className="member__overflow">
          <span>Ingenieur</span>
        </div>
        </div>
        <div className="name__container">
          <div className="member__overflow"></div>
        </div>
        <div className="text__container">
          <span></span> 
          <div className="member__overflow">
            <p>Schneider est un ingénieur en robotique qui</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MemberHero