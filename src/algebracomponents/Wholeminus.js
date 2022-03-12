import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
export const Wholeminus = (props) => {
  document.title = props.title;
  const history = useHistory();
  const [frstvar, setfrstvar] = useState("");
  const [scndvar, setscndvar] = useState("");
  const [answer, setanswer] = useState("");
  const [pehla, setpehla] = useState("");

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
      let frstsquare = Math.pow(frstvar, 2);
      let scndsquare = Math.pow(scndvar, 2);
      setanswer(frstsquare - 2 * frstvar * scndvar + scndsquare + " = (a-b)² ");
    } else {
      toast.error("Input Field Cant Be Empty");
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
      let frstsquare = Math.pow(frstvar, 2);
      let scndsquare = Math.pow(scndvar, 2);
      setanswer(frstsquare - 2 * frstvar * scndvar + scndsquare + " = (a-b)² ");
    }

    // let frstsquare = Math.pow(frstvar, 2);
    // let scndsquare = Math.pow(scndvar, 2);
  };

  return (
    <>
      <div
        className="card text-center container my-2 bg-dark"
        style={{ width: "18rem", color: "white" }}
      >
        <h2>(A-B)²</h2>
        <form className="container text-center">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Enter Value of a
            </label>
            <input
              placeholder="enter the values of a "
              onChange={handlechange}
              value={frstvar}
              onClick={() => {
                setpehla(0);
                setanswer("");
              }}
              type="number"
              required
              class="form-control text-center"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
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
              class="form-control text-center"
              id="exampleInputPassword1"
            />
          </div>

          <button
            type="button"
            class="btn btn-primary text-center my-2"
            onClick={handlewholesqr}
            disabled={!frstvar.length > 0}
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
        <button className="btn btn-success text-center mt-2" onClick={showsol}>
          solution
        </button>
      </div>
      {pehla === 1 && (
        <div
          className={`card container d-flex justify-content-center bg-${
            props.color === "light" ? "light" : "dark"
          } align-items-center`}
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
            As We Know The Formula: <h1>(a-b)²=a²-2ab+b²</h1>
          </h1>
          <h1 className={`text-${props.color === "light" ? "dark" : "light"}`}>
            <h1
              className={`text-${props.color === "light" ? "dark" : "light"}`}
            >
              ({frstvar}+{scndvar})²=
            </h1>{" "}
            ({frstvar})²-2*{frstvar}*{scndvar}+({scndvar})²
          </h1>
          <h1 className={`text-${props.color === "light" ? "dark" : "light"}`}>
            Answer:{answer}
          </h1>

          {/* <iframe
            style={{ borderRadius: "25px" }}
            webkitallowfullscreen
            mozallowfullscreen
            allowFullScreen
            className="embed-responsive-item"
            width="300"
            height="300"
            src="https://youtu.be/embed/EXfhP-m_AzY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
          ></iframe> */}

          <iframe
            style={{ borderRadius: "25px" }}
            webkitallowfullscreen
            mozallowfullscreen
            allowFullScreen
            width="300"
            height="300"
            src="https://www.youtube.com/embed/EXfhP-m_AzY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
          ></iframe>
        </div>
      )}
    </>
  );
};
