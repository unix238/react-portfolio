import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

export const Navbar = ({ active, updateCurrentPage }) => {
  return (
    <nav className="nav">
      <div className="nav__groups">
        <div className="nav__left">
          <div className="nav__logo">
            <div className="logo">
              <Link
              className="logo__link"
              to={'/home'}>
                B
              </Link>
            </div>
          </div>
          <div className="nav__name">Bekzot A.</div>
        </div>
        <div className="nav__right">
          <div className="nav__link">
            <Link
              to={"/home"}
              onClick={() => {
                updateCurrentPage("/home");
              }}
              className={active === "/home" ? "active " + "link" : "link"}
            >
              Home
            </Link>
          </div>
          <div className="nav__link">
            <Link
              to="/resume"
              onClick={() => {
                updateCurrentPage("/resume");
              }}
              className={active === "/resume" ? "active " + "link" : "link"}
            >
              Resume
            </Link>
          </div>
          <div className="nav__link">
            <Link
              to={"/projects"}
              onClick={() => {
                updateCurrentPage("/projects");
              }}
              className={active === "/projects" ? "active " + "link" : "link"}
            >
              Projects
            </Link>
          </div>
          <div className="nav__link">
            <Link
              to={"/contact"}
              onClick={() => {
                updateCurrentPage("/contact");
              }}
              className={active === "/contact" ? "active " + "link" : "link"}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
