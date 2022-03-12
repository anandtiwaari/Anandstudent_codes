import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import lozad from "lozad";
import Aos from "aos";
import "aos/dist/aos.css";
export const Allbtns = (props) => {
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
          data-aos="fade-right"
          to="/whole"
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src="https://www.mathdoubts.com/cimgs/algebra/identities/a-plus-b-whole-square.png"
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/whole"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                (A+B)²
              </Link>
            </div>
          </div>
        </Link>
        <Link
          data-aos="fade-left"
          to="/wholeminus"
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src="https://www.mathdoubts.com/cimgs/algebra/identities/a-minus-b-whole-square.png"
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/wholeminus"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                (A-B)²
              </Link>
            </div>
          </div>
        </Link>
        <Link data-aos="fade-up" to="/area" style={{ textDecoration: "none" }}>
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src="https://www.assignmentpoint.com/wp-content/uploads/2017/10/Area-of-a-Circle-1.jpg"
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/area"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                AreaOfCircle
              </Link>
            </div>
          </div>
        </Link>
        <Link
          data-aos="fade-down"
          to="/Circumference"
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
                to="/Circumference"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                Circumference
              </Link>
            </div>
          </div>
        </Link>
        <Link
          data-aos="flip-up"
          to="/findprice"
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src="https://media.istockphoto.com/photos/searching-magnifier-glass-dollar-dollar-icon-under-magnifying-glass-picture-id1180233758?b=1&k=20&m=1180233758&s=170667a&w=0&h=jTjyg1zFf5HcsjETbld5VR5sStZYc3GaKJMYE_AbH10="
              className="card-img-top lozad"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/findprice"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                Findprice
              </Link>
            </div>
          </div>
        </Link>
        <Link
          data-aos="flip-down"
          to="/findgram"
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src="https://i2.wp.com/www.mathswithmum.com/wp-content/uploads/2021/05/Screen-Shot-2021-05-22-at-14.54.03.png?resize=635%2C336&ssl=1"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/findgram"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                Findgram
              </Link>
            </div>
          </div>
        </Link>
        <Link
          data-aos="flip-left"
          to="/wholecube"
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src="https://i2.wp.com/www.mathswithmum.com/wp-content/uploads/2021/05/Screen-Shot-2021-05-22-at-14.54.03.png?resize=635%2C336&ssl=1"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/wholecube"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                (A+B)³
              </Link>
            </div>
          </div>
        </Link>
        <Link
          data-aos="flip-right"
          to="/wholemcube"
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem", marginTop: "0.8rem" }}>
            <img
              src="https://i2.wp.com/www.mathswithmum.com/wp-content/uploads/2021/05/Screen-Shot-2021-05-22-at-14.54.03.png?resize=635%2C336&ssl=1"
              alt="..."
              height="190px"
            />

            <div className="card-body bg-dark" style={{ height: "15vh" }}>
              <Link
                to="/wholemcube"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  // width: "100%",
                }}
                className="btn btn-dark  mb-10 justify-content-center   d-flex align-items-center mx-3"
              >
                (A-B)³
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
