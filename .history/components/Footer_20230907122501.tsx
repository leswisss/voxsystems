"use client";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import {motion} from "framer-motion"
import { slideFooterAnim, slideYFooterAnim, slideLeftFooterAnim } from "@/animations";
import { FooterData } from "@/utils";
import Link from "next/link";
import "../styles/footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  const [emailValue, setEmailValue] = useState("");

   const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.3,
   })


  return (
    <footer className="footer" ref={ref}>
      <div className="container footer__container">
        <div className="footer__top">
          <div className="f-top__header">
            <div className="footer__overflow">
              <motion.div variants={slideYFooterAnim} animate={inView ? "entry" : "initial"} className="f-logo-wrap">
                <Link href="/" className="f-logo" >
                  SYSTEM<span>S</span>
                </Link>
              </motion.div>
              
            </div>
            <div className="footer__overflow">
              <motion.span variants={slideYFooterAnim} animate={inView ? "entry" : "initial"} className="f-slogan">
                Votre partenaire dans la vie intelligente
              </motion.span>
            </div>
          </div>
          <div className="f-top__content">
            <div className="f-top__left">
              <motion.p variants={slideFooterAnim} animate={inView ? "entry" : "initial"}>
                Pour recevoir toutes les informations du groupe SYSTEMS, 
                inscrivez-vous à notre newsletter
              </motion.p>

              <motion.div variants={slideFooterAnim} animate={inView ? "entry" : "initial"} className="newsletter">
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
              </motion.div>
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
