"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";
import quotesIcon from "@iconify/icons-el/quotes";
import "../../styles/TeamPage/ttestimonial.scss";

const Testimonial = () => {
  const textRefs = [0, 1, 2, 3, 4].map(() => useRef(null));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    textRefs.forEach((textRef, i) => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: i!==0 ? "top+=20px bottom" : "",
          end: "bottom+=30px bottom",
          scrub: 0.3,
        },

        y: "100%",
        opacity: 0.2
      })
    })
  })
  return (
    <section className="team__testimonial">
      <div className="container ttest__container">
        <Icon icon={quotesIcon} />

        <div className="test__text">
          <div className="tt__content">
            <div className="test__overflow">
              <p ref={textRefs[0]}>“La meilleure partie de mon travail est de pouvoir dire aux clients: Vous adorerez travailler avec notre équipe, et de savoir que c'est la vérité.”</p>
            </div>
            <div className="test__overflow">
              <p ref={textRefs[1]}>“La meilleure partie de mon travail est de pouvoir dire</p>
            </div>
            <div className="test__overflow">
              <p ref={textRefs[2]}>aux clients: Vous adorerez travailler avec notre</p>
            </div>
            <div className="test__overflow">
              <p ref={textRefs[3]}>équipe, et de savoir que c'est la vérité.”</p>
            </div>
            <div className="test__overflow">
              <h3 ref={textRefs[4]}>HERVÉ NOUBOUSSIE, Ingenieur</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
