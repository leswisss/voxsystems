import React from "react";
import Image from "next/image";
import ABOUT from "../../public/images/voxabout.jpg";
import ABOUT2 from "../../public/images/voxabout2.jpg";
import ABOUT3 from "../../public/images/voxabout3.jpg";

const VoxAbout = () => {
  return (
    <section className="vox__about">
      <div className="container vox__about-container">
        <div className="va-top">
          <div className="va__overflow">
            <Image
              src={ABOUT}
              alt="A propos de nous"
              fill={false}
              sizes="(max-width: 600px) 100%, 100%"
            />
          </div>
          <div className="va__overflow">
            <span>QUI SOMMES</span> <span>NOUS?</span>
          </div>
          <div className="va__overflow">
            <Image
              src={ABOUT2}
              alt="A propos de nous"
              fill={false}
              sizes="(max-width: 600px) 100%, 100%"
            />
          </div>
        </div>
        <div className="va-bottom">
          <div className="va__overflow">
            <p>
            Vox Link est une entreprise innovante spécialisée dans les services d’automatisation de la maison. Nous sommes passionnés par la technologie et nous nous efforçons de rendre la vie de nos clients plus facile et plus confortable grâce à nos solutions d’automatisation de pointe. Notre équipe est composée d'experts en technologie et en design, dédiés à fournir des services de qualité supérieure à nos clients.
            </p>
          </div>
          <div className="va__overflow">
            <Image
              src={ABOUT3}
              alt="A propos de nous"
              fill={false}
              sizes="(max-width: 600px) 100%, 100%"
            />
          </div>
          <div className="va__overflow">

          </div>
        </div>
      </div>
    </section>
  );
};

export default VoxAbout;
