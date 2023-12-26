"use client";

import React from "react";
import { CldVideoPlayer } from "next-cloudinary";

const ServicesPage = () => {
  return (
    <section className="services__page">
      <div className="p-services__header">
        <div className="s-header__container">
          <div className="p__ser-overflow"><p>CE QUE</p></div>
          <div className="p__ser-overflow"><p>NOUS <span>OFFRONS</span></p></div>
          <div className="p__ser-overflow">
            <p>
              Ameliorer votre vie grace a la technologie. Nous sommes la pour vous aider a atteindre vos 
              objectifs et a realiser vos reves. Devouvrer comment
            </p>
          </div>
        </div>
      </div>
      <div className="container p-services__con">

      </div>
    </section>
  );
};

export default ServicesPage;
