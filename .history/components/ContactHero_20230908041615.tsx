"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { VoxContact } from ".";
import { ContactSelection } from "@/utils";
import Link from "next/link";

import IMAGE from "../public/images/contactimage.jpg";
import "../styles/contact.scss";

const ContactHero = () => {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const getActiveEmail = () => {
    const index = ContactSelection.findIndex((item) => item.slug === service);
    const activeEmail = ContactSelection[index].mail;

    return activeEmail;
  };

  return (
    <section className="contact__hero">
      <div className="contact__image" style={{backgroundImage: "url('images/contactimage.jpg')"}}>
        <Image/>
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
