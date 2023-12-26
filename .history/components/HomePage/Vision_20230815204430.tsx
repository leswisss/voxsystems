import React from 'react'
import "../../styles/LandingPage/vision.scss"
import Image from 'next/image'
import IMAGE from "../../public/images/vision.jpg"

const Vision = () => {
  return (
    <section className="vision">
      <div className="container vision__container">
        <div className="vision__image">
          <Image src={IMAGE} alt="Notre Vision" fill={false}/>
        </div>
        <div className="vision__content">
          <div className="circle__loader">
            <div className="circle__loader-2">

            </div>
          </div>
          <div className="vision__content">
            <div className="vision__overflow">
              <h3>NOTRE <span>VISION</span></h3>
            </div>
            <div className="vision__data">
            Chez SYSTEMS, nous croyons en la création de solutions intelligentes et durables qui améliorent la qualité de vie et d’apprentissage de nos clients. Nous mettons à profit notre expertise en automatisation, en câblage, en énergie solaire et en éducation pour offrir des produits et des services personnalisés et innovants qui répondent aux besoins et aux préférences variés de nos clients. Nous sommes engagés envers l’excellence, la satisfaction du client, la responsabilité sociale et la protection de l’environnement. Notre vision est d’être le fournisseur leader de systèmes intégrés qui rendent les maisons, les soins de santé et l'éducation plus accessibles, efficaces et agréables.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision