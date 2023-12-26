"use client";

import React, { useEffect, useRef } from "react";
import "../../styles/ServicesPage/servicescard.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";
import arrowUpBroken from "@iconify/icons-solar/arrow-up-broken";
import Image from "next/image";
import { ServiceCardData } from "@/types";
import Link from "next/link";

interface ServiceProps {
  data: ServiceCardData;
}

const ServicesCard = ({ data }: ServiceProps) => {
  const cardTexts = [0, 1, 2, 3, 4].map(() => useRef(null));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    cardTexts.forEach((cardText, i) => {
      gsap.from(cardText.current, {
        scrollTrigger: {
          trigger: card,
          start: "top+=200px bottom",
          end: "bottom+=200px bottom",
          scrub: 0.3,
        },

        x: "500px",
        stagger: function(i) { return 0.5 * i; }
      });
    });
  }, []);

  return (
    <div className="p-services__card">
      <div className="p-card__back">
        <Image
          src={data.image}
          alt={data.text}
          fill={true}
          sizes="(max-width:600px) 100%, 100%)"
        />
      </div>
      <div
        className="card__overlay"
        style={{ backgroundColor: `${data.background}` }}
      ></div>
      <div className="card__content" >
        <div className="content__overflow">
          <Link href={data.link} className="co-header" ref={cardTexts[0]}>
            {data.name}
          </Link>
        </div>
        <div className="card__content-main">
          <div className="content__overflow">
            <div className="c-content">
              <p ref={cardTexts[1]}>{data.text}</p>
              <h3 ref={cardTexts[2]}>{data.slogan}</h3>
              <p ref={cardTexts[3]}>{data.text2}</p>
            </div>
          </div>
          <div className="content__overflow">
            <Link
              className={`discover-b ${data.outline ? "outline-b" : ""}`}
              href={data.link} ref={cardTexts[4]}
            >
              DÉCOUVRIR <Icon icon={arrowUpBroken} />
            </Link>
          </div>
        </div>
        <Link className="p-contact" href={`/contacts?service=${data.slug}`} data-scroll data-scroll-speed="0.3">
          <span>
            CONTACTEZ <br />
            NOUS
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
