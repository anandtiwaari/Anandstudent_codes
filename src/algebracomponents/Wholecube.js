import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
export const Wholecube = (props) => {
  document.title = props.title;
  const history = useHistory();
  const [frstvar, setfrstvar] = useState("");
  const [scndvar, setscndvar] = useState("");
  const [answer, setanswer] = useState("");
  const [pehla, setpehla] = useState(0);
  const showsol = () => {
    setpehla(1);
  };
  const handlechange = (e) => {
    setfrstvar(e.target.value);
  };
  const handlechange1 = (e) => {
    setscndvar(e.target.value);
  };
  const handlewholesqr = () => {
    if (frstvar && scndvar) {
      let frstcube = Math.pow(frstvar, 3);
      let scndcube = Math.pow(scndvar, 3);
      let frstsqr = Math.pow(frstvar, 2);
      let scndsqr = Math.pow(scndvar, 2);
      setanswer(
        frstcube +
          3 * frstsqr * scndvar +
          3 * frstvar * scndsqr +
          scndcube +
          " = (a+b)³ "
      );
    } else {
      toast.error("Input field cant be empty");
    }
    if (frstvar.length < 0) {
      toast.warning("Enter something");
      // return false;
    } else if (!/^\S{3,}$/.test(frstvar && scndvar)) {
      // toast.warning("only number are allowed");
      // return false;
    } else if (!/^[a-zA-Z]+$/.test(frstvar && scndvar)) {
      // toast.warning("only numbers are allowed");
    } else if (!/^(?:(\w)(?!\1\1))+$/.test(frstvar && scndvar)) {
      toast.warning("only numbers are allowed");
    } else {
      let frstcube = Math.pow(frstvar, 3);
      let scndcube = Math.pow(scndvar, 3);
      let frstsqr = Math.pow(frstvar, 2);
      let scndsqr = Math.pow(scndvar, 2);
      setanswer(
        frstcube +
          3 * frstsqr * scndvar +
          3 * frstvar * scndsqr +
          scndcube +
          " = (a+b)³ "
      );
    }
  };

  return (
    <>
      <div
        className="card text-center bg-dark container my-2"
        style={{ width: "18rem", color: "white" }}
      >
        <h2>(A+B)³</h2>
        <form className="container text-center">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Enter Value of a
            </label>
            <input
              placeholder="enter the values of a "
              onChange={handlechange}
              value={frstvar}
              required
              onClick={() => {
                setpehla(0);
                setanswer("");
              }}
              type="number"
              className="form-control text-center"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Enter Value of b
            </label>
            <input
              placeholder="enter the value of b  "
              onChange={handlechange1}
              value={scndvar}
              onClick={() => {
                setpehla(0);
                setanswer("");
              }}
              type="number"
              required
              className="form-control text-center"
              id="exampleInputPassword1"
            />
          </div>

          <button
            type="button"
            className="btn btn-primary text-center my-2"
            onClick={handlewholesqr}
            disabled={!frstvar.length > 0 && !scndvar.length > 0}
          >
            Calculate
          </button>
        </form>

        {answer.length > 0 && (
          <button className="btn btn-success my-2">{answer}</button>
        )}
        <button
          className="btn btn-danger text-center"
          onClick={() => {
            history.goBack();
          }}
        >
          Back
        </button>
        <button
          disabled={!answer.length > 0}
          className="btn btn-success text-center mt-2"
          onClick={showsol}
        >
          Solutions
        </button>
      </div>
      {/* <h1
        className={`container text-${
          props.color === "light" ? "dark" : "light"
        }`}
      >
        Solution:
      </h1> */}

      {pehla === 1 && (
        <div
          className={`card container d-flex justify-content-center bg-${
            props.color === "light" ? "light" : "dark"
          } align-items-center`}
          style={{
            // width: "40rem",
            borderRadius: "15px",
            border: "8px solid #006689",
          }}
        >
          <h1
            className={`text-${
              props.color === "light" ? "dark" : "light"
            } d-flex justify-content-end`}
          >
            Solution:
          </h1>
          <h1 className={`text-${props.color === "light" ? "dark" : "light"}`}>
            a={frstvar}
          </h1>
          <h1 className={`text-${props.color === "light" ? "dark" : "light"}`}>
            b={scndvar}
          </h1>
          <h1 className={`text-${props.color === "light" ? "dark" : "light"}`}>
            As We Know The Formula: <h1>(a+b)³=a³+3a²b+3ab²+b³</h1>
          </h1>
          <h1 className={`text-${props.color === "light" ? "dark" : "light"}`}>
            <h1
              className={`text-${props.color === "light" ? "dark" : "light"}`}
            >
              ({frstvar}+{scndvar})³=
            </h1>{" "}
            ({frstvar})³+3*{frstvar}²*{scndvar}+3*{frstvar}({scndvar})²+
            {scndvar}³
          </h1>
          <h1 className={`text-${props.color === "light" ? "dark" : "light"}`}>
            Answer:{answer}
          </h1>
          <iframe
            style={{ borderRadius: "25px" }}
            webkitallowfullscreen
            mozallowfullscreen
            allowFullScreen
            width="300"
            height="300"
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/pK5NBIkLXa4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; aut oplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
          ></iframe>
        </div>
      )}
    </>
  );
};
