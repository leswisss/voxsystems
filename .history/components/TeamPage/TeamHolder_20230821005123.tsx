import React from 'react'
import "../../styles/TeamPage/teamholder.scss"
import TeamBottom from '../HomePage/TeamBottom'

const TeamHolder = () => {
  return (
    <section className="team__holder">
      <div className="container tc__container">
        <TeamBottom homePg={false}/>
      </div>
    </section>
  )
}

export default TeamHolder