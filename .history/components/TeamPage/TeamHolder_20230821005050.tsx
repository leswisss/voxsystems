import React from 'react'
import "../../"
import TeamBottom from '../HomePage/TeamBottom'

const TeamHolder = () => {
  return (
    <section className="team__content">
      <div className="container tc__container">
        <TeamBottom homePg={false}/>
      </div>
    </section>
  )
}

export default TeamHolder