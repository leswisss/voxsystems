"use client";

import React, {useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IMAGE from "../../public/images/user.jpg";
import Link from "next/link";
import Image from "next/image";
import "../../styles/TeamPage/membercontent.scss"

const MemberContent = () => {
  const imageRef = useRef(null)
  const imageConRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])
  return (
    <section className="member__content">
      <div className="container m-content__container">
        <div className="m-content__wrapper">
          <div className="content__overflow" ref={imageConRef}>
            <div className="mc__image" ref={imageRef}>
              <Image
                src={IMAGE}
                alt="Team Member"
                fill={true}
                sizes="(max-width: 600px) 100%, 100%"
              />
            </div>
          </div>

          <div className="content__overflow">
            <div className="m-content__text">
              Bafri Schneider est un ingénieur en robotique talentueux né et
              élevé au Cameroun. En plus de son expertise en robotique, Bafri a
              également une passion pour la conception et le développement de
              sites web. Il possède une combinaison unique de compétences qui
              lui permet de créer des technologies innovantes et de pointe. Le
              parcours de Bafri en robotique et en développement web lui donne
              une perspective unique sur la façon d'intégrer ces deux domaines
              pour créer quelque chose de vraiment spécial. Son travail témoigne
              de son dévouement et de sa passion pour son métier.
            </div>

            <div className="m__socials">
              <h3>RÉSEAU SOCIAUX</h3>

              <div className="social__links">
                <Link href="/">LINKEDIN</Link>
                <Link href="/">DRIBBBLE</Link>
                <Link href="/">INSTAGRAM</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberContent;
