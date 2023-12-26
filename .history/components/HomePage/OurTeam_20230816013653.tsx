"use client";

import React, { useState } from "react";
import Image from "next/image";
import TEAM from "../../public/images/team.jpg";
import TEAM2 from "../../public/images/team2.jpg";
import { TeamData } from "@/utils";
import TeamModal from "./TeamModal";
import "../../styles/LandingPage/team.scss";
import Link from "next/link";

const OurTeam = () => {
  const [activeTeam, setActiveModal] = useState({ active: false, index: 0 });
  return (
    <section className="ourteam">
      <div className="container ourteam__container">
        <div className="team__top">
          <div className="team__top-1">
            <div className="team__overflow">
              <div className="team__image-1">
                <Image src={TEAM} alt="Notre Equipe" fill={true} />
              </div>
            </div>
            <div className="team__overflow">
              <p>
                LES <span>EXPERTS</span> DERRIÈRE NOS
              </p>
            </div>
          </div>
          <div className="team__top-2">
            <div className="team__overflow">
              <p>SOLUTIONS INTELLIGENTES</p>
            </div>
            <div className="team__overflow">
              <div className="team__image-2">
                <Image src={TEAM2} alt="Notre Equipe" fill={true} />
              </div>
            </div>
          </div>
        </div>
        <div className="team__bottom">
          <div className="t-bottom__header">
            <div></div>
            <div className="team__bottom-header">
              <span>L'EQUIPE</span>
              <Link href="/notre-equipe">VOIR PLUS</Link>
            </div>
          </div>
          <div className="t-bottom__content">
            {
              TeamData.map((data, i) => (
                <TeamModal data={data} activeModal={activeModal} setActiveModal={setActiveModal} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
