import React from 'react'
import IMAGE from "../../public/images/user2.jpg"
import Image from 'next/image'

const MemberContent = () => {
  return (
    <section className="member__content">
      <div className="container m-content__container">
        <div className="m-content__wrapper">
          <div className="content__overflow">
            <div className="mc__image">
              <Image src={IMAGE} alt="Team Member" fill={true} sizes='(max-width: 600px) 100%, 100%'/>
            </div>
          </div>
          <div className="content__overflow"></div>
        </div>
      </div>
    </section>
  )
}

export default MemberContent