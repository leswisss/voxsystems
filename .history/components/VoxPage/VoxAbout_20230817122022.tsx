import React from 'react'
import ABOUT from "../../public/images/voxabout.jpg"
import ABOUT2 from "../../public/images/voxabout2.jpg"
import ABOUT3 from "../../public/images/voxabout3.jpg"

const VoxAbout = () => {
  return (
    <section className="vox__about">
      <div className="container vox__about-container">
        <div className="va-top">
          <div className="va__overflow">
            <Image src={ABOUT} alt="A propos de nous"/>
          </div>
        </div>
        <div className="va-bottom">

        </div>
      </div>
    </section>
  )
}

export default VoxAbout