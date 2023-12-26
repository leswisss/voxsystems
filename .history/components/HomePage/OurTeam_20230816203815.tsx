"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import TEAM from "../../public/images/team.jpg";
import TEAM2 from "../../public/images/team2.jpg";
import { TeamData } from "@/utils";
import TeamContent from "./TeamContent";
import {motion} from "framer-motion"
import "../../styles/LandingPage/team.scss";
import { gsap } from "gsap";
import { Icon } from "@iconify/react"
import Link from "next/link";
import { scaleAnimation } from "@/animations";



const OurTeam = () => {
  const [activeTeam, setActiveTeam] = useState({ active: false, index: 0 });
  const { active, index } = activeTeam;

  const [ client, setClient]
  const modalRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect (() => {
    let xMoveContainer = gsap.quickTo(modalRef.current, "left", {duration: 0.8, ease: "power3"})
    let yMoveContainer = gsap.quickTo(modalRef.current, "top", {duration: 0.8, ease: "power3"})
    //Move cursor
    let xMoveCursor = gsap.quickTo(cursorRef.current, "left", {duration: 0.5, ease: "power3"})
    let yMoveCursor = gsap.quickTo(cursorRef.current, "top", {duration: 0.5, ease: "power3"})
  }, [])
  

  const moveItems = (x: number, y: number) => {
    xMoveContainer(x)
    yMoveContainer(y)
    xMoveCursor(x)
    yMoveCursor(y)
  }
  
  const manageModal = (active: boolean, index: number, x: number, y: number) => {
    moveItems(x, y)
    setActiveTeam({active, index})
  }

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
              <Link href="/notre-equipe">VOIR PLUS <Icon icon="solar:arrow-up-broken"/></Link>
            </div>
          </div>
          <div className="t-bottom__content" onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}}>
            {
              TeamData.map((data, i) => (
                <TeamContent data={data} activeTeam={activeTeam} manageModal={manageModal} setActiveTeam={setActiveTeam} />
              ))
            }
            <>
              <motion.div variants={scaleAnimation} initial="initial" animate={active ? "entry" : "exit"} className="modal__container" ref={modalRef}>
                <div className="modal__slider" style={{ transform: `translateY(${-index*100}%)`}}>
                  {
                    TeamData.map((item) => {
                      const { image, id , name} = item;
                      return (
                        <div className="modal" key={id}>
                          <Image src={image} alt={name} fill={true}/>
                        </div>
                      )
                    })
                  }
                </div>
              </motion.div>
              <motion.div variants={scaleAnimation} initial="initial" animate={active ? "entry" : "exit"} className="cursor" ref={cursorRef}>
                <Link href="/" className="cursor__label">VOIR</Link>
              </motion.div>
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
