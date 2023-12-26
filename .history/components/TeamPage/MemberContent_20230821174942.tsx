import React from 'react'
import Image from 'next/image'

const MemberContent = () => {
  return (
    <section className="member__content">
      <div className="container m-content__container">
        <div className="m-content__wrapper">
          <div className="content__overflow">
            <div className="mc__image">
              <Image />
            </div>
          </div>
          <div className="content__overflow"></div>
        </div>
      </div>
    </section>
  )
}

export default MemberContent