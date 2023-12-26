"use client";

import React, {useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ServicePageData } from "@/utils";
import "../../styles/TeamPage/tcontact.scss";

const TeamContact = () => {

  const clRef = useRef(null)
  const linkRefs = [0,1,2,3].map(() => useRef(null))

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: clRef.current,
        start: "top+= bottom",
        end: "bottom bottom",
        scrub: 0.3
      }
    })

    tl
      .from(linkRefs[0].current, {opacity: 0, duration: 1, ease: "power4"})
      .from(linkRefs[1].current, {opacity: 0, duration: 1, ease: "power4"}, 0.5)
      .from(linkRefs[2].current, {opacity: 0, duration: 1, ease: "power4"}, 1)
      .from(linkRefs[3].current, {opacity: 0, duration: 1, ease: "power4"}, 1.5)
  }, [])


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

        <div className="contact__links" ref={clRef}>
          {ServicePageData.map((item, i) => (
            <Link
              href={`/contacts?service=${item.slug}`}
              className="contact__link"
              key={`cl-${i}`}
              ref={linkRefs[i]}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamContact;
