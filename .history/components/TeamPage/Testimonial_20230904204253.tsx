"use client";

import React from "react";
import { Icon } from "@iconify/react";
import quotesIcon from "@iconify/icons-el/quotes";
import "../../styles/TeamPage/ttestimonial.scss";

const Testimonial = () => {
  return (
    <section className="team__testimonial">
      <div className="container ttest__container">
        <Icon icon={quotesIcon} />

        <div className="test__text">
          <div className="tt__content">
            <div className="test__overflow">
              <p>“La meilleure partie de mon travail est de pouvoir dire</p>
            </div>
            <div className="test__overflow">
              <p>aux clients: Vous adorerez travailler avec notre</p>
            </div>
            <div className="test__overflow">
              <p>équipe, et de savoir que c'est la vérité.”</p>
            </div>
            <div className="test__overflow-mobile">
              <p>“La meilleure partie de mon travail est de pouvoir dire aux clients: Vous adorerez travailler avec notre équipe, et de savoir que c'est la vérité.”</p>
            </div>
            <div className="test__overflow">
              <h3>HERVÉ NOUBOUSSIE, Ingenieur</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
