import React from 'react'

const TeamBottom = () => {
  return (
    <div className="team__bottom">
      <div className="t-bottom__header">
        <div></div>
        <div className="team__bottom-header">
          <span>L'EQUIPE</span>
          <Link href="/notre-equipe">VOIR PLUS <Icon icon="solar:arrow-up-broken"/></Link>
        </div>
      </div>
      <div className="t-bottom__content">
        {
          TeamData.map((data, i) => (
            <TeamContent data={data} activeTeam={activeTeam} setActiveTeam={setActiveTeam} key={`t-${i}`}/>
          ))
        }
        <TeamModal team={TeamData} activeModal={activeTeam}/>
      </div>
    </div>
  )
}

export default TeamBottom