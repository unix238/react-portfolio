import React from "react";

export const ProjectCard = ({img, title, desc, link, git}) => {
  return (
    <div className="projects__card">
      <div className="projects__card__img">
        <img src={img} className="projects__card__img" alt="passgen" />
      </div>
      <div className="projects__card__text">
        <div className="projects__card__title">
          <h2>{title}</h2>
        </div>
        <div className="projects__card__description">
          {desc}
        </div>
      </div>
      <div className="projects__card__link">
        {link ? <a href={link} target="_blank" className="lear__more">
          Live Demo
        </a> : null}
        <a href={git} target="_blank" className="github">GitHub</a>
      </div>
    </div>
  );
};
