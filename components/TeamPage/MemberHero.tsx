"use client";

import React, { useEffect, useRef } from "react";
import { Icon } from '@iconify/react';
import { gsap } from "gsap";
import upArrow from '@iconify/icons-guidance/up-arrow';
import "../../styles/TeamPage/memberhero.scss"

const MemberHero = ({state, state2}: {state: boolean,  state2: boolean}) => {
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
      .to(textRef[0].current, {y: "0%", duration: 1, ease: "power4"}, 0.1)
      .to(textRef[1].current, {y: "0%", duration: 1, ease: "power4"}, 0.5)
      .to(textRef[2].current, {y: "0%", duration: 1, ease: "power4"}, 1)
      .to(textRef[3].current, {opacity: 1, duration: 2, ease: "power4"}, 2)
      .to(textRef[4].current, {opacity: 1, duration: 2, ease: "power4"}, 2)

    !(!state && !state2) ? tl2.pause() : tl2.play()
    }, [state, state2])

  return (
    <section className="member">
      <div className="container member__container">
        <div className="member__wrapper">
          <div className="name__container">
            <div className="member__overflow">
              <h3 ref={textRef[0]}>BAFRI</h3>
            </div>
            <div className="member__overflow">
              <span ref={textRef[4]}>Ingenieur</span>
            </div>
          </div>
          <div className="name__container">
            <div className="member__overflow"><h4 ref={textRef[1]}>Schneider</h4></div>
          </div>
          <div className="text__container">
            <span ref={textRef[3]} data-scroll data-scroll-direction="horizontal" data-scroll-speed="0.1"><Icon icon={upArrow}></Icon></span>
            <div className="member__overflow">
              <p ref={textRef[2]}>
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
