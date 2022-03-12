import React from "react";
import { Link } from "react-router-dom";
// import Volumeofcube from "./Volumeofcube.png";
// import Totalsurface from "./Totalsurface.jpg";
// import lateral from "./lateral.png";
import lozad from "lozad";
export const Alltrigobtns = (props) => {
  const observer = lozad();
  observer.observe();
  document.title = props.title;
  return (
    <>
      <div className="d-flex mt-2  flex-wrap justify-content-evenly align-items-center">
        <Link to="/SinTrigo" style={{ textDecoration: "none" }}>
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzSSlMdcMi701zRLfQQ10TZoWKzBgHhio1tw&usqp=CAU"
              }
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/SinTrigo"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                Sin-Theta
              </Link>
            </div>
          </div>
        </Link>
        <Link to="/costrigo" style={{ textDecoration: "none" }}>
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src={
                "https://access.imgdownloader.com/original_20220124191905334663/imgdownloader.com-20220124191906493729.jpg"
              }
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/costrigo"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                Cos-Theta
              </Link>
            </div>
          </div>
        </Link>
        <Link to="/tantrigo" style={{ textDecoration: "none" }}>
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src={
                "data:image/jpeg;base64,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"
              }
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/tantrigo"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                TanTheta
              </Link>
            </div>
          </div>
        </Link>
        <Link to="/cosectrigo" style={{ textDecoration: "none" }}>
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src="https://useruploads.socratic.org/tB49RZJSRuiRu9Z7bmPd_aid381649-728px-Calculate-the-Circumference-of-a-Circle-Step-3-Version-2.jpg"
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/cosectrigo"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                cosectrigo
              </Link>
            </div>
          </div>
        </Link>

        <Link to="/cuboidtotal" style={{ textDecoration: "none" }}>
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
        <Link to="/cuboidvolume" style={{ textDecoration: "none" }}>
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
        <Link to="/rcccurved" style={{ textDecoration: "none" }}>
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
        <Link to="/rcctotal" style={{ textDecoration: "none" }}>
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
        <Link to="/rccVolume" style={{ textDecoration: "none" }}>
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
        <Link to="/hemispherecurved" style={{ textDecoration: "none" }}>
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
        <Link to="/hemispheretotal" style={{ textDecoration: "none" }}>
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
        <Link to="/hemispherevolume" style={{ textDecoration: "none" }}>
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
        <Link to="/spherecurved" style={{ textDecoration: "none" }}>
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
        <Link to="/spheretotal" style={{ textDecoration: "none" }}>
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
        <Link to="/spherevolume" style={{ textDecoration: "none" }}>
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
