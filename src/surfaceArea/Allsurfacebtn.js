import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Volumeofcube from "./Volumeofcube.png";
import Totalsurface from "./Totalsurface.jpg";
import lateral from "./lateral.png";
import lozad from "lozad";
import Aos from "aos";
import "aos/dist/aos.css";
export const Allsurfacebtn = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    return () => {};
  }, []);
  const observer = lozad();
  observer.observe();
  document.title = props.title;
  return (
    <>
      <div className="d-flex mt-2  flex-wrap justify-content-evenly align-items-center">
        <Link
          data-aos="fade-down"
          to="/cube"
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src={lateral}
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/cube"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                CubeCurveSurface
              </Link>
            </div>
          </div>
        </Link>
        <Link
          data-aos="fade-up"
          to="/totalsurface"
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src={Totalsurface}
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/totalsurface"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                CubeTotalSurface
              </Link>
            </div>
          </div>
        </Link>
        <Link
          data-aos="zoom-in-up"
          to="/volume"
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src={Volumeofcube}
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/volume"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                CubeVolume
              </Link>
            </div>
          </div>
        </Link>
        <Link
          data-aos="flip-left"
          to="/cdcurved"
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src="https://useruploads.socratic.org/tB49RZJSRuiRu9Z7bmPd_aid381649-728px-Calculate-the-Circumference-of-a-Circle-Step-3-Version-2.jpg"
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/cdcurved"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                CuboidCurveSurface
              </Link>
            </div>
          </div>
        </Link>

        <Link
          data-aos="zoom-in-down"
          to="/cuboidtotal"
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src="https://useruploads.socratic.org/tB49RZJSRuiRu9Z7bmPd_aid381649-728px-Calculate-the-Circumference-of-a-Circle-Step-3-Version-2.jpg"
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/cuboidtotal"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                CuboidTotalSurface
              </Link>
            </div>
          </div>
        </Link>
        <Link
          data-aos="zoom-in-left"
          to="/cuboidvolume"
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src="https://useruploads.socratic.org/tB49RZJSRuiRu9Z7bmPd_aid381649-728px-Calculate-the-Circumference-of-a-Circle-Step-3-Version-2.jpg"
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/cuboidvolume"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                CuboidVolumeSurface
              </Link>
            </div>
          </div>
        </Link>
        <Link
          data-aos="zoom-in-right"
          to="/rcccurved"
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src="https://useruploads.socratic.org/tB49RZJSRuiRu9Z7bmPd_aid381649-728px-Calculate-the-Circumference-of-a-Circle-Step-3-Version-2.jpg"
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/rcccurved"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                RccCurvedsurface
              </Link>
            </div>
          </div>
        </Link>
        <Link
          data-aos="zoom-out-up"
          to="/rcctotal"
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src="https://useruploads.socratic.org/tB49RZJSRuiRu9Z7bmPd_aid381649-728px-Calculate-the-Circumference-of-a-Circle-Step-3-Version-2.jpg"
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/rcctotal"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                RccTotalsurface
              </Link>
            </div>
          </div>
        </Link>
        <Link
          data-aos="zoom-out-down"
          to="/rccVolume"
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src="https://useruploads.socratic.org/tB49RZJSRuiRu9Z7bmPd_aid381649-728px-Calculate-the-Circumference-of-a-Circle-Step-3-Version-2.jpg"
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/rccVolume"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                RccVolume
              </Link>
            </div>
          </div>
        </Link>
        <Link
          data-aos="fade-zoom-in"
          to="/hemispherecurved"
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src="https://useruploads.socratic.org/tB49RZJSRuiRu9Z7bmPd_aid381649-728px-Calculate-the-Circumference-of-a-Circle-Step-3-Version-2.jpg"
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/hemispherecurved"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                hemispherecurved
              </Link>
            </div>
          </div>
        </Link>
        <Link
          data-aos="flip-left"
          to="/hemispheretotal"
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src="https://useruploads.socratic.org/tB49RZJSRuiRu9Z7bmPd_aid381649-728px-Calculate-the-Circumference-of-a-Circle-Step-3-Version-2.jpg"
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/hemispheretotal"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                hemispheretotal
              </Link>
            </div>
          </div>
        </Link>
        <Link
          data-aos="flip-down"
          to="/hemispherevolume"
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src="https://useruploads.socratic.org/tB49RZJSRuiRu9Z7bmPd_aid381649-728px-Calculate-the-Circumference-of-a-Circle-Step-3-Version-2.jpg"
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/hemispherevolume"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                hemispherevolume
              </Link>
            </div>
          </div>
        </Link>
        <Link
          data-aos="flip-up"
          to="/spherecurved"
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src="https://useruploads.socratic.org/tB49RZJSRuiRu9Z7bmPd_aid381649-728px-Calculate-the-Circumference-of-a-Circle-Step-3-Version-2.jpg"
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/spherecurved"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                spherecurved
              </Link>
            </div>
          </div>
        </Link>
        <Link
          data-aos="fade-out"
          to="/spheretotal"
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src="https://useruploads.socratic.org/tB49RZJSRuiRu9Z7bmPd_aid381649-728px-Calculate-the-Circumference-of-a-Circle-Step-3-Version-2.jpg"
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/spheretotal"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                spheretotal
              </Link>
            </div>
          </div>
        </Link>
        <Link
          data-aos="flip-left"
          to="/spherevolume"
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src="https://useruploads.socratic.org/tB49RZJSRuiRu9Z7bmPd_aid381649-728px-Calculate-the-Circumference-of-a-Circle-Step-3-Version-2.jpg"
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/spherevolume"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                spherevolume
              </Link>
            </div>
          </div>
        </Link>

        {/* <Link
          to="/whole"
          className="btn btn-dark my-3 mx-3   bt-sm"
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          (A+B)²
        </Link> */}

        {/* <Link
          to="/area"
          className="btn btn-dark my-3  mx-3  "
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Area of circle
        </Link> */}
        {/* <Link
          to="/whole"
          className="btn btn-dark my-3  mx-3 "
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Circumference
        </Link>
        <Link
          to="/findprice"
          className="btn btn-dark my-3 mx-3 "
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Find Price
        </Link>
        <Link
          to="/findgram"
          className="btn btn-dark my-3  mx-3 "
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Find Gram
        </Link>
        <Link
          to="/whole"
          className="btn btn-dark my-3  mx-3"
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Quadratic Equation
        </Link>
        <Link
          to="/whole"
          className="btn btn-dark my-3  mx-3 "
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Find Gram
        </Link>
        <Link
          to="/whole"
          className="btn btn-dark my-3  mx-3"
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Find Gram
        </Link>
        <Link
          to="/whole"
          className="btn btn-dark my-3  mx-3"
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Find Gram
        </Link>
        <Link
          to="/whole"
          className="btn btn-dark my-3  mx-3 "
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Find Gram
        </Link>
        <Link
          to="/whole"
          className="btn btn-dark my-3  mx-3 "
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Find Gram
        </Link> */}
      </div>
    </>
  );
};
