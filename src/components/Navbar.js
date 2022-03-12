import React from "react";
// import moon from "./moon.png";
import sun from "./sun.png";
import moonva from "./moonva.png";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <>
      <nav
        className={`navbar meracss navbar-expand-lg navbar-${props.color} bg-${props.color}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            StudentZone
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            // style={merastyle}
          >
            <ul className="navbar-nav apnaclass">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/formula">
                  Formula {props.mohit}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              {/* yaha parr toogle aayegaa bhai samajh */}
            </ul>
          </div>
        </div>
        <div
          className="form-check form-switch d-flex"
          style={{ marginRight: "2rem" }}
        >
          <input
            className="form-check-input me-2"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={props.modechange}
          />
          <label
            className={`form-check-label text-${
              props.color === "light" ? "black" : "white"
            }`}
            for="flexSwitchCheckDefault"
          >
            {props.color === "light" ? (
              <span className="container d-flex justify-content-center">
                {/* <img src={moon} style={{ height: "25px" }} alt="" /> */}
                <img src={moonva} style={{ height: "25px" }} alt="" />
                {/* Darkmode */}
              </span>
            ) : (
              <span>
                <img src={sun} style={{ filter: "invert(1)" }} alt="" />
                {/* Lightmode */}
              </span>
            )}
          </label>
        </div>
      </nav>
    </>
  );
};
