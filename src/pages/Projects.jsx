import React, { useState } from "react";
import "../style/projects.css";
import passgen from "../img/passgen.png";
import todo from "../img/todo-app.webp";
import typeT from "../img/type.png";
import { ProjectCard } from "../components/ProjectCard";
import { CardList } from "../components/CardList";
import { Footer } from "../components/Footer";

export const Projects = () => {
  const [projects, setProjects] = useState([
    {
      img: passgen,
      title: "Password Generator",
      desc: "Web application that can generate passwords depending on the user's settings Application written using typescript",
      type: "frontend",
      link: "https://unix238.github.io/react-ts-password-generator/",
      git: "https://github.com/unix238/react-ts-password-generator",
    },
    {
      img: todo,
      title: "Todo",
      desc: "Task manager that loads active and inactive tasks from the jsonplaceholder also you can create delete and update tasks",
      type: "frontend",
      link: "https://unix238.github.io/react-todo-test/",
      git: "https://github.com/unix238/react-todo-test",
    },
    {
      img: typeT,
      title: "Type Trainer",
      desc: "Text typing simulator after you finish typing you will see your scores from print speed to accuracy",
      type: "frontend",
      link: "https://unix238.github.io/react-type-trainer/",
      git: "https://github.com/unix238/react-type-trainer",
    },
  ]);
  const [filterdProjects, setFilteredProjects] = useState(projects);
  const [active, setActive] = useState("all");

  const filterHandler = (type) => {
    setActive(type);
    if (type === "all") {
      setFilteredProjects(projects);
      return;
    }
    const filteredProjects = projects.filter(
      (project) => project.type === type
    );
    setFilteredProjects(filteredProjects);
  };

  return (
    <div>
      <div className="projects">
        <div className="projects__container">
          <div className="wrapper">
            <div className="projects__title">
              <h1>Projects</h1>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="projects__filter">
            <div className="projects__filter__group">
              <div
                className={
                  active === "all"
                    ? "filter__active projects__filter__item"
                    : "projects__filter__item"
                }
                onClick={() => {
                  filterHandler("all");
                }}
              >
                <p>All</p>
              </div>
              <div
                className={
                  active === "frontend"
                    ? "filter__active projects__filter__item"
                    : "projects__filter__item"
                }
                onClick={() => {
                  filterHandler("frontend");
                }}
              >
                <p>Frontend</p>
              </div>
              <div
                className={
                  active === "fullstack"
                    ? "filter__active projects__filter__item"
                    : "projects__filter__item"
                }
                onClick={() => {
                  filterHandler("fullstack");
                }}
              >
                <p>Fullstack</p>
              </div>
            </div>
            <div className="projects__filter__count">
              <p>{projects.length} projects</p>
            </div>
          </div>

          {/* projects */}
          <div className="projects__cards__group">
            <CardList cards={filterdProjects} />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
