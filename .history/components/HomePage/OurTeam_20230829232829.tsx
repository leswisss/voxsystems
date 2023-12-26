import React from "react";
import Image from "next/image";
import TEAM from "../../public/images/team.jpg";
import TEAM2 from "../../public/images/team2.jpg";
import TeamBottom from "./TeamBottom";
import "../../styles/LandingPage/team.scss";


const OurTeam = () => {

  return (
    <section className="ourteam">
      <div className="container ourteam__container">
        <div className="team__top">
          <div className="team__top-1">
            <div className="team__overflow">
              <div className="team__image-1">
                <Image src={TEAM} alt="Notre Equipe" fill={true} sizes="(max-width: 600px) 100%, 100%"/>
              </div>
            </div>
            <div className="team__overflow">
              <p>
                LES <span>EXPERTS</span> DERRIÈRE NOS
              </p>
            </div>
            <div className="team__overflow">
              <p>
                LES <span>EXPERTS</span> DERRIÈRE NOS SOLUTIONS INTELLIGENTES
              </p>
            </div>

          </div>
          <div className="team__top-2">
            <div className="team__overflow">
              <p>SOLUTIONS INTELLIGENTES</p>
            </div>
            <div className="team__overflow">
              <div className="team__image-2">
                <Image src={TEAM2} alt="Notre Equipe" fill={true} sizes="(max-width: 600px) 100%, 100%"/>
              </div>
            </div>
          </div>
        </div>
        <TeamBottom homePg={true}/>
      </div>
    </section>
  );
};

export default OurTeam;
