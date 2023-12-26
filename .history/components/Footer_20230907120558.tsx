"use client";

import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import { FooterData } from "@/utils";
import Link from "next/link";
import "../styles/footer.scss";
import { useInView } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();
  const [emailValue, setEmailValue] = useState("");

   const {ref, InView} = useInView({
    trigg
   })


  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div className="f-top__header">
            <div className="footer__overflow">
              <Link href="/" className="f-logo">
                SYSTEM<span>S</span>
              </Link>
            </div>
            <div className="footer__overflow">
              <span className="f-slogan">
                Votre partenaire dans la vie intelligente
              </span>
            </div>
          </div>
          <div className="f-top__content">
            <div className="f-top__left">
              <p>
                Pour recevoir toutes les informations du groupe SYSTEMS, 
                inscrivez-vous à notre newsletter
              </p>

              <div className="newsletter">
                <input
                  type="email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                />
                <span className="icon">
                  <svg width="50" height="20">
                    <path
                      d="M5 10 L40 10 L30 5 L40 10 L30 15"
                      stroke="#f5f5f5"
                      fill="none"
                      strokeWidth="1"
                    />
                  </svg>
                </span>
                {!emailValue && (
                  <span className="placeholder">Votre email</span>
                )}
              </div>
            </div>
            <div className="f-top__right">
              {FooterData.map((item, i) => (
                <div className="footer__links" key={`ff-${i}`}>
                  <h4>{item.name}</h4>

                  <div className="f-links__container">
                    {item.links.map((link, i) => (
                      <Link key={`f-${i}`} href={link.href}>
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="f-bottom__left">
            &copy; SYSTEMS {year} <span>TOUS DROITS RESÉRVÉS</span>
          </div>
          <div className="f-bottom__right">
            <Link href="/politique-de-cookies">POLITIQUE DE COOKIES</Link>
            <Link href="/termes-conditions">MENTIONS LÉGALES</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
