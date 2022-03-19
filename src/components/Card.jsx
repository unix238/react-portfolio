import React from "react";

export const Card = ({title, body}) => {
  return (
    <div className="skills_card">
      <div className="skills__card__text">
        <div className="skills__card__title">{title}</div>
        <div className="skills__card__body">
          {body}
        </div>
      </div>
    </div>
  );
};
