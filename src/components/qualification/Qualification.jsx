import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Industry
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor of Computer Science</h3>
                <span className="qualification__subtitle">
                  Northwestern Polytechnic
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>

              </div>

              <div>
                <h3 className="qualification__title">Bachelor of Computer Science</h3>
                <span className="qualification__subtitle">
                University of Alberta
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2025 
                </div>
              </div>
            </div>

            <div className="qualification__data">
              
            </div>

            
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Developer Intern</h3>
                <span className="qualification__subtitle">
                Aaron Merril Engineering
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 May - 2023 August
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

            

              
            </div>

            <div className="qualification__data">
             

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
