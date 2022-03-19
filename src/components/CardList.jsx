import React from "react";
import { ProjectCard } from "./ProjectCard";

export const CardList = ({ cards }) => {
  return cards.map((card) => <ProjectCard key={card.id} {...card} />);
};
