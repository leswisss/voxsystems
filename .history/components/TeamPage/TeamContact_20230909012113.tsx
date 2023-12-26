"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { ServicePageData } from "@/utils";
import "../../styles/TeamPage/tcontact.scss";

const TeamContact = () => {

  const {ref, inView} = useInView({
    triggerOnce: false,
    threshold: 0.2
  })

  return (
    <section className="team__contact">
      <div className="container tc__container">
        <div className="tc__overflow">
          <div className="tc__header">VOULEZ-VOUS NOUS PARLER DE VOTRE</div>
        </div>
        <div className="tc__overflow">
          <div className="tc__header">
            PROJET OU AVEZ-VOUS BESOIN DE SUPPORT?
          </div>
        </div>
        <div className="tc__overflow">
          <p>Notre équipe est prête à vous aider!</p>
        </div>

        <div className="contact__links" ref={ref}>
          {ServicePageData.map((item, i) => (
            <div className="s-link__overflow"></div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamContact;
