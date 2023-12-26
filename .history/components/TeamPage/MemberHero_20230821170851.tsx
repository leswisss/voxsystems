import React from "react";
import "../../"

const MemberHero = () => {
  return (
    <section className="member">
      <div className="container member__container">
        <div className="member__wrapper">
          <div className="name__container">
            <div className="member__overflow">
              <h3>BAFRI</h3>
            </div>
            <div className="member__overflow">
              <span>Ingenieur</span>
            </div>
          </div>
          <div className="name__container">
            <div className="member__overflow"></div>
          </div>
          <div className="text__container">
            <span></span>
            <div className="member__overflow">
              <p>
                Schneider est un ingénieur en robotique qui <br />
                aime la conception et le développement de <br />
                sites web
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberHero;
