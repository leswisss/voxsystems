import React from 'react'
import ".."

const SolarAbout = () => {
  return (
    <section className="solar__about">
      <div className="container sa__container">
        <div className="sa__top">
          <div className="sa-top__left">
            <div className="sa__overflow">
              <p>NOUS SOMMES FIERS DE PROPOSER</p>
            </div>
            <div className="sa__overflow">
              <p>UNE LARGE GAMMES DE SERVICES</p>
            </div>
            <div className="sa__overflow">
              <p>D'ÉNERGIE SOLAIRE, Y COMPRIS</p>
            </div>
            <div className="sa__overflow">
              <p><span>L'INSTALLATION</span>, LA <span>MAINTENANCE</span> ET</p>
            </div>
            <div className="sa__overflow">
              <p>LA <span>RÉPARATION</span> DE PANNAUX SOLAIRES</p>
            </div>
          </div>
          <div className="sa-top__right">
            <div className="sa__image-1">
              <Image />
            </div>
          </div>
        </div>
        <div className="sa__bottom"></div>
      </div>
    </section>
  )
}

export default SolarAbout