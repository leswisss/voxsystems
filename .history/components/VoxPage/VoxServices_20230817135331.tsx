import React from "react";
import { VoxServicesData } from "@/utils";
import "../../styles/VoxPage/voxservices.scss"

const VoxServices = () => {
  return (
    <section className="vox__services">
      <div className="container v-services__container">
        <div className="v-services__header">
          <div className="vs__overflow">
            <div>NOUS OFFRONS UNE VARIÉTÉ</div>
          </div>
          <div className="vs__overflow">
            <div>
              DE SERVICES <span>HAUT DE GAMME</span>
            </div>
          </div>
        </div>
        <div className="v-services__content">
          {
            VoxServicesData.map((item, i) => (
              <div className="vsd__overflow" key={`v`}>
                <div className="vs__card">
                  <span></span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default VoxServices;
