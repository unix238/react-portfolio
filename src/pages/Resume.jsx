import React from "react";
import "../style/resume.css";
import { Footer } from "../components/Footer";

export const Resume = () => {
  return (
    <div className="resume">
      <div className="resume__top">
        <div className="wrapper">
          <div className="resume__items">
            <div className="resume__left">
              <h1>Resume</h1>
            </div>
            <div className="resume__right">
              <p>1 year of experience</p>
            </div>
          </div>
        </div>
      </div>
      <section className="resume__center">
        <div className="wrapper">
          <div className="resume__center__group">
            <div className="resume__education">
              <div className="resume__title">
                <h2>Education</h2>
              </div>
              <div className="card__inner">
                <div className="education__card">
                  <div className="education__date__and__center">
                    <div className="education__date">
                      <p>2020-2024</p>
                    </div>
                    <div className="education__center">
                      <p>
                        International Information Technology University (IITU)
                      </p>
                    </div>
                  </div>
                  <div className="education__about">
                    <div className="education__degree">Bachelor degree</div>
                    <div className="education__info">
                      IITU is one of the best IT based universities in
                      Kazakhstan. I study at Computer Science major and will
                      graduate in 2024.
                    </div>
                  </div>
                </div>
                <div className="education__card">
                  <div className="education__date__and__center">
                    <div className="education__date">
                      <p>2021</p>
                    </div>
                    <div className="education__center">
                      <p>Coursera</p>
                    </div>
                  </div>
                  <div className="education__about">
                    <div className="education__degree">
                      Front-End Web Development with React
                    </div>
                    <div className="education__info">
                      This course will use JavaScript ES6 for developing React
                      application. You will also get an introduction to the use
                      of Reactstrap for Bootstrap 4-based responsive UI design.
                    </div>
                  </div>
                </div>
                <div className="education__card">
                  <div className="education__date__and__center">
                    <div className="education__date">
                      <p>2021</p>
                    </div>
                    <div className="education__center">
                      <p>Udemy</p>
                    </div>
                  </div>
                  <div className="education__about">
                    <div className="education__degree">Web Development</div>
                    <div className="education__info">
                      Besides studying at the university i do self-study. I
                      really love courses from any sources and successfully
                      finished courses like React.js, Node.js.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume__education">
              <div className="resume__title">
                <h2>Experience</h2>
              </div>
              <div className="card__inner">
                <div className="education__card">
                  <div className="education__date__and__center">
                    <div className="education__date">
                      <p>2020-2021</p>
                    </div>
                    <div className="education__center">
                      <p>Enactus (IITU student club)</p>
                    </div>
                  </div>
                  <div className="education__about">
                    <div className="education__degree">
                      Front-End Web Developer
                    </div>
                    <div className="education__info">
                      I am a member of Enactus student club. I am responsible
                      for the development of special web services and
                      applications.
                    </div>
                  </div>
                </div>

                <div className="education__card">
                  <div className="education__date__and__center">
                    <div className="education__date">
                      <p>2021-2022</p>
                    </div>
                    <div className="education__center">
                      <p>Own Projects</p>
                    </div>
                  </div>
                  <div className="education__about">
                    <div className="education__degree">
                      Frontend React.js PET Projects
                    </div>
                    <div className="education__info">
                      In parallel with the studying, I implemented my own
                      projects. With this i gained development experience. You
                      can view some of my projects in Github.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="skills">
        <div className="wrapper">
          <div className="title__skills">
            <h2>Tech Skills</h2>
          </div>
          <div className="skills__groups">
            <div className="skills__group">
              <div className="skills__skill">
                <div className="skill__text">
                  <div className="skill__title">HTML/CSS</div>
                  <div className="skill__percent">90%</div>
                </div>
                <div className="skill__progress">
                  <div className="skill__back">
                    <div
                      className="skill__active"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="skills__skill">
                <div className="skill__text">
                  <div className="skill__title">React</div>
                  <div className="skill__percent">70%</div>
                </div>
                <div className="skill__progress">
                  <div className="skill__back">
                    <div
                      className="skill__active"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="skills__skill">
                <div className="skill__text">
                  <div className="skill__title">TypeScript</div>
                  <div className="skill__percent">60%</div>
                </div>
                <div className="skill__progress">
                  <div className="skill__back">
                    <div
                      className="skill__active"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="skills__skill">
                <div className="skill__text">
                  <div className="skill__title">Express.js</div>
                  <div className="skill__percent">50%</div>
                </div>
                <div className="skill__progress">
                  <div className="skill__back">
                    <div
                      className="skill__active"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="skills__skill">
                <div className="skill__text">
                  <div className="skill__title">Django</div>
                  <div className="skill__percent">70%</div>
                </div>
                <div className="skill__progress">
                  <div className="skill__back">
                    <div
                      className="skill__active"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="skills__skill">
                <div className="skill__text">
                  <div className="skill__title">Flask</div>
                  <div className="skill__percent">65%</div>
                </div>
                <div className="skill__progress">
                  <div className="skill__back">
                    <div
                      className="skill__active"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__skill">
                <div className="skill__text">
                  <div className="skill__title">JavaScript</div>
                  <div className="skill__percent">90%</div>
                </div>
                <div className="skill__progress">
                  <div className="skill__back">
                    <div
                      className="skill__active"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="skills__skill">
                <div className="skill__text">
                  <div className="skill__title">Python</div>
                  <div className="skill__percent">90%</div>
                </div>
                <div className="skill__progress">
                  <div className="skill__back">
                    <div
                      className="skill__active"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="skills__skill">
                <div className="skill__text">
                  <div className="skill__title">C/C++/C#</div>
                  <div className="skill__percent">60%</div>
                </div>
                <div className="skill__progress">
                  <div className="skill__back">
                    <div
                      className="skill__active"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="skills__skill">
                <div className="skill__text">
                  <div className="skill__title">Swift</div>
                  <div className="skill__percent">50%</div>
                </div>
                <div className="skill__progress">
                  <div className="skill__back">
                    <div
                      className="skill__active"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="skills__skill">
                <div className="skill__text">
                  <div className="skill__title">Responsive Design</div>
                  <div className="skill__percent">70%</div>
                </div>
                <div className="skill__progress">
                  <div className="skill__back">
                    <div
                      className="skill__active"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="skills__skill">
                <div className="skill__text">
                  <div className="skill__title">Git</div>
                  <div className="skill__percent">60%</div>
                </div>
                <div className="skill__progress">
                  <div className="skill__back">
                    <div
                      className="skill__active"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
