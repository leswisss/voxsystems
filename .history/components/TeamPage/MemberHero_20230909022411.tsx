"use client";

import React, { useEffect, useRef } from "react";
import { Icon } from '@iconify/react';
import { gsap } from "gsap";
import upArrow from '@iconify/icons-guidance/up-arrow';
import "../../styles/TeamPage/memberhero.scss"

const MemberHero = () => {
  const textRef = [0,1,2,3,4].map(() => useRef(null))

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()

    const tl2 = gsap.timeline();


    tl2
      .to(textRef[0].current, {y: "0%", duration: 1, ease: "power4"})
      .to(textRef[1].current, {y: "0%", duration: 1, ease: "power4"}, 0)
      .to(textRef[2].current, {y: "0%", duration: 1, ease: "power4"}, 0)
      .to(textRef[3].current, {opacity: "0px", duration: 1, ease: "power4"}, 0.5)
      .to(textRef[4].current, {opacity: "0px", duration: 1, ease: "power4"}, 0.5)
  }, [])

  return (
    <section className="member">
      <div className="container member__container">
        <div className="member__wrapper">
          <div className="name__container">
            <div className="member__overflow">
              <h3>BAFRI</h3>
            </div>
            <div className="member__overflow">
              <span>Ingenieur</span>
            </div>
          </div>
          <div className="name__container">
            <div className="member__overflow"><h4>Schneider</h4></div>
          </div>
          <div className="text__container">
            <span><Icon icon={upArrow}></Icon></span>
            <div className="member__overflow">
              <p>
                Schneider est un ingénieur en robotique qui <br />
                aime la conception et le développement de <br />
                sites web
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberHero;
