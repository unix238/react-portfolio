import React from "react";
import "../style/index.css";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import cv from '../img/cv.pdf';

export const Index = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div>
      <div className="wrapper">
        <section className="center">
          <div className="index__info">
            <div className="index__info__container">
              <div className="info__position">
                <p>Web Developer</p>
              </div>
              <div className="info__name">
                <h1>Bekzot Abdyldayev</h1>
              </div>
              <div className="info__about">
                Hello! Welcome to my personal portfolio website. I'm Web
                Developer & Programmer living in Almaty, KZ. I make
                high-quality Web applications with modern tech stack.
              </div>
              <div className="info__buttons">
                <a href={cv} download><div className="btn cv">Download CV</div></a>
                <div className="btn contact" onClick={handleClick}>
                  Contact
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="skills">
          <div className="skills__container">
            <div className="title">What I Can Do</div>
            <div className="skills__list">
              <div className="skills__item">
                <Card
                  title={"Web Development"}
                  body={
                    "Nowadays, every website has two main goals: First, it needsto be responsive and work across all devices. Secondly, the site must be fast and user-friendly. For me, its important to develop scalable, high-quality website."
                  }
                />
              </div>
              <div className="skills__item">
                <Card
                  title={"RESTful Services"}
                  body={
                    "REST stands for Representational State Transfer. In basic terms, it’s a lightweight architecture that simplifies network communication on the web. I make scalable web services using Node + Express.                    "  
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
