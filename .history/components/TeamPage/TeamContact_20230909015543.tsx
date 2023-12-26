"use client";

import React, {useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useInView } from "react-intersection-observer";
import {motion} from "framer-motion"
import { teamContactAnim } from "@/animations";
import Image from "next/image";
import Link from "next/link";
import { ServicePageData } from "@/utils";
import "../../styles/TeamPage/tcontact.scss";

const TeamContact = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const textRefs = [0,1,2].map(() => useRef(null))

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    textRefs.forEach((textRef, i) => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top+=50px bottom",
          end: "bottom+=70px bottom",
          scrub: 0.3,

        },

        y: "-100%"
      })
    })
  }, [])

  return (
    <section className="team__contact">
      <div className="container tc__container">
        <div className="tc__overflow">
          <div className="tc__header" ref={textRefs[0]}>VOULEZ-VOUS NOUS PARLER DE VOTRE</div>
        </div>
        <div className="tc__overflow">
          <div className="tc__header" ref={textRefs[1]}>
            PROJET OU AVEZ-VOUS BESOIN DE SUPPORT?
          </div>
        </div>
        <div className="tc__overflow">
          <p ref={textRefs[2]}>Notre équipe est prête à vous aider!</p>
        </div>

        <div className="contact__links" ref={ref}>
          {ServicePageData.map((item, i) => (
            <motion.div variants={teamContactAnim} custom={i} animate={inView ? "entry" : "initial"} className="c-link__overflow">
              <Link
                href={`/contacts?service=${item.slug}`}
                className="contact__link"
                key={`cl-${i}`}
              >
                <div className="link__image">
                  <Image
                    src={item.image}
                    alt={`${item.name} contact`}
                    sizes="(max-width: 600px) 100%, 100%"
                    fill={true}
                  />
                </div>
                <span>{item.name} contact</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamContact;
