"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import SideBar from "./Sidebar";
import "../styles/navbar.scss";
import { topBurgerAnim, bottomBurgerAnim } from "@/animations";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [activeBurger, setActiveBurger] = useState(false);
  const [navbarStyles, setnavbarStyles] = useState({
    backgroundColor: "transparent",
    backdropFilter: "blur(0px)"
  })
  const navbar = useRef<HTMLHeadElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const navigation = navbar.current

    if (navigation) {
      let lastScroll = 0;

      ScrollTrigger.create({
        start: "top+=700 top",
        end: "bottom bottom",
        onUpdate: (self) => {
          if (self.direction === -1 && self.scroll() < lastScroll) {
            gsap.to(navigation, { y: 0 });
          } else {
            gsap.to(navigation, { y: -navigation.offsetHeight});
          }
          lastScroll = self.scroll();
        },
        scrub: true,
      });
    }

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setnavbarStyles({
          backgroundColor: "rgba(255,255,255,0.4)",
          backdropFilter: "blur(5px)"
        })
      } else {
        setnavbarStyles({
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)"
        })
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <header className="navigation" style={navbarStyles} ref={navbar}>
        <div className="container navigation__container">
          <div className="navbar">
            <Link href="/" className="logo">
              SYSTEM<span>S</span>
            </Link>

            <div className="left__section">
              <Link href="/contacts?service=vox-link" className="nav__cta">Parlons</Link>
              <div
                className="burger__menu"
                onClick={() => setActiveBurger((prev) => !prev)}
              >
                <motion.span
                  variants={topBurgerAnim}
                  animate={activeBurger ? "entry" : "initial"}
                  initial="initial"
                  className="top-burger"
                ></motion.span>
                <motion.span
                  variants={bottomBurgerAnim}
                  animate={activeBurger ? "entry" : "initial"}
                  initial="initial"
                  className="bottom-burger"
                ></motion.span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence mode="wait">
        {activeBurger && (
          <SideBar activeSide={activeBurger} setActiveSide={setActiveBurger} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
