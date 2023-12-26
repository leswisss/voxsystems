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

const ContactHero = () => {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");
  const textRefs = [0,1].map(() => useRef(null))
  const selectBar = useRef(null)

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();

    const tl = gsap.timeline({ repeat: -1 });
    const tl2 = gsap.timeline();

    tl.to(imageRef.current, {
      scaleX: 1.2,
      scaleY: 1.2,
      duration: 15,
      ease: "linear",
    }).to(imageRef.current, {
      scaleX: 1,
      scaleY: 1,
      duration: 15,
      ease: "linear",
    })

    tl2
      .to(textRef[0].current, {y: "0%", duration: 1, ease: "power4"})
      .to(textRef[1].current, {y: "0%", duration: 1, ease: "power4"}, 0)
      .to(textRef[2].current, {y: "0%", duration: 1, ease: "power4"}, 0)
      .to(footerRef.current, {y: "0px", duration: 1, ease: "power4"}, 0.5)
  }, []);

  const getActiveEmail = () => {
    const index = ContactSelection.findIndex((item) => item.slug === service);
    const activeEmail = ContactSelection[index].mail;

    return activeEmail;
  };

  return (
    <section className="contact__hero">
      <div className="contact__image">
        <Image src={IMAGE} alt="Background image" fill={true} sizes="100vw" placeholder="blur" quality={100}/>
      </div>
      <div className="selectbox__overflow">
        <div className="selection__box">
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
      <div className="chero__contact">
        <VoxContact email={getActiveEmail()} />
      </div>
      <div className="ch-contact__header">
        <div className="ch__overflow">
          <h3>CONTACTEZ-NOUS</h3>
        </div>
        <div className="ch__overflow">
          <p>
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
