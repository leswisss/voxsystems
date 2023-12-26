"use client";

import React, { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { gsap } from "gsap";
import Image from "next/image";
import { VoxContact } from ".";
import { ContactSelection } from "@/utils";
import Link from "next/link";

import IMAGE from "../public/images/contactimage.jpg";
import "../styles/contact.scss";

const ContactHero = ({setState, state, state2}: {setState: React.Dispatch<React.SetStateAction<boolean>>, state: boolean,  state2: boolean}) => {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");
  const textRefs = [0,1].map(() => useRef(null))
  const selectBar = useRef(null)
  const contactCard = useRef(null)

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();

    const tl2 = gsap.timeline();

    tl2
      .to(textRefs[0].current, {y: "0%", duration: 1, ease: "power4"}, 0.1)
      .to(textRefs[1].current, {y: "0%", duration: 1, ease: "power4"}, 0.5)
      .to(selectBar.current, {opacity: 1, duration: 2, ease: "power4"}, 1)
      .to(contactCard.current, {y: "0%", duration: 1, ease: "power4"}, 1.5)

      !(!state && !state2) ? tl2.pause() : tl2.play()
  }, [state, state2]);

  const getActiveEmail = () => {
    const index = ContactSelection.findIndex((item) => item.slug === service);
    const activeEmail = ContactSelection[index].mail;

    return activeEmail;
  };

  return (
    <section className="contact__hero">
      <div className="contact__image">
        <Image src={IMAGE} alt="Background image" fill={true} sizes="100vw" placeholder="blur" quality={100} onLoadingComplete={() => setState}/>
      </div>
      <div className="selectbox__overflow">
        <div className="selection__box" ref={selectBar}>
          {ContactSelection.map((item, i) => (
            <Link
              href={`/contacts?service=${item.slug}`}
              key={`sb-${i}`}
              className={service === item.slug ? "active-span" : ""}
            >
              {item.name} CONTACT
            </Link>
          ))}
        </div>
      </div>
      <div className="chero__contact" ref={contactCard}>
        <VoxContact email={getActiveEmail()} />
      </div>
      <div className="ch-contact__header">
        <div className="ch__overflow">
          <h3 ref={textRefs[0]}>CONTACTEZ-NOUS</h3>
        </div>
        <div className="ch__overflow">
          <p ref={textRefs[1]}>
            {" "}
            Si vous avez des questions ou souhaitez discuter de votre projet
            avec nous, n'hésitez pas à nous contacter. Nous sommes là pour vous
            aider et nous serons heureux de répondre à toutes vos demandes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
