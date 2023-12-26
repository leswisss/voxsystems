import React from 'react'
import TeamBottom from '../HomePage/TeamBottom'

const TeamContent = () => {
  return (
    <section className="team__content">
      <div className="container tc__container">
        <TeamBottom homePg={false}/>
      </div>
    </section>
  )
}

export default TeamContent