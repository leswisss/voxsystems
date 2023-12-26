import React from "react";
import Image from "next/image";
import PARRALAX from "../../public/images/voxparallax.jpg";
import "../../styles/VoxPage/vparallax.scss";

const VoxParallax = () => {
  return (
    <section className="vox__parallax">
      <div
        className="background__image"
        style={{ backgroundImage: "url(/images/voxparallax.jpg)" }}
      >
        <Image
          src={Background}
          fill
          alt="Background Image"
          quality={100}
          placeholder="blur"
          sizes="100vw"
        />
      </div>
      <div className="parallax__text">
        <div>L'AVENIR DE</div>
        <div>L'AUTOMATISATION DE VOTRE MAISON</div>
        <span className="mobile__span">
          L'AVENIR DE L'AUTOMATISATION DE VOTRE MAISON
        </span>
      </div>
    </section>
  );
};

export default VoxParallax;
