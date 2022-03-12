import React, { useEffect } from "react";
import Algebra from "./Algebra.jpg";
import surface from "./surface.webp";
import trigo from "./trigo.webp";
import loggg from "./loggg.jpg";
import { Link } from "react-router-dom";
import lozad from "lozad";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Whole } from "../algebracomponents/Whole";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export const Fromula = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    return () => {};
  }, []);

  const observer = lozad();
  observer.observe();
  document.title = props.title;
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center mt-5">
        <Link
          to="/btnoption"
          data-aos="zoom-in-down"
          style={{ textDecoration: "none" }}
        >
          <div className="mt-2 mx-2">
            <div
              className="card"
              style={{
                width: "18rem",
                backgroundColor: "#040119",
                // backgroundColor: "",
                color: "white",
              }}
            >
              <img
                src={Algebra}
                className="card-img-top lozad"
                height="170vh"
                alt="..."
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">Algebra Formulas</h5>
                <p className="card-text">
                  Solve Most common Algebra Problems with One Click hasle free
                  And Fast
                </p>
                <Link to="/btnoption" className="btn btn-primary">
                  Algebra
                </Link>
              </div>
            </div>
          </div>
        </Link>
        <Link
          data-aos="flip-up"
          to="/surfacecube"
          style={{ textDecoration: "none" }}
        >
          <div className="mt-2 mx-2">
            <div
              className="card"
              style={{
                width: "18rem",
                backgroundColor: "#040119",
                color: "white",
              }}
            >
              <img
                src={surface}
                className="card-img-top lozad"
                height="170vh"
                alt="..."
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">Surface Area Formulas</h5>
                <p className="card-text">
                  Solve Most common surface Area Problems with One Click hasle
                  free And Fast
                </p>
                <Link to="/surfacecube" className="btn btn-primary">
                  surface & volume
                </Link>
              </div>
            </div>
          </div>
        </Link>
        <Link
          data-aos="flip-left"
          to="/trigo"
          style={{ textDecoration: "none" }}
        >
          <div
            // data-aos="flip-left"
            className="mt-2 mx-2"
          >
            <div
              // data-aos="flip-left"
              className="card"
              style={{
                width: "18rem",
                backgroundColor: "#040119",
                color: "white",
              }}
            >
              <img
                src={trigo}
                height="170vh"
                className="card-img-top lozad"
                alt="..."
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">Trigo Formulas</h5>
                <p className="card-text">
                  Solve Most common Trigo Problems with One Click hasle free And
                  Fast
                </p>
                <Link to="/trigo" className="btn btn-primary">
                  Trigonometry
                </Link>
              </div>
            </div>
          </div>
        </Link>
        <Link
          data-aos="flip-right"
          to="/btnoption"
          style={{ textDecoration: "none" }}
        >
          <div className="mt-2 mx-2">
            <div
              className="card"
              style={{
                width: "18rem",
                backgroundColor: "#040119",
                color: "white",
              }}
            >
              <img
                src={loggg}
                height="170vh"
                className="card-img-top lozad"
                alt="..."
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">Logarithm Formulas</h5>
                <p className="card-text">
                  Solve Most common Logarithm Problems with One Click hasle free
                  And Fast
                </p>
                <Link to="/btnoption" className="btn btn-primary">
                  Logarithm
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
