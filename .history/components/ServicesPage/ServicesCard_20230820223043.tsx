import React from 'react'

const ServicesCard = () => {
  return (
    <div className='p-services__card'>
      <div className="card__overlay"></div>
      <div className="card__content">
        <div className="content__overflow">
          <h3>VOX LINK</h3>
        </div>
        <div className="card__content-main">
          <div className="content__overflow">
            <div className="c-content">
              <p>L'un de nos services phares est <span></span></p>
            </div>
          </div>
          <div className="content__overflow"></div>
        </div>  
      </div>
    </div>
  )
}

export default ServicesCard