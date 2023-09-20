import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">Industry</h3>
        <span className="about__subtitle">4 Months Working</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">UAlberta</span>
      </div>

      <div className="about__box">
        <i class="bx bx-support about__icon"></i>

        <h3 className="about__title">Projects</h3>
        <span className="about__subtitle">7</span>
      </div>
    </div>
  );
};

export default Info;