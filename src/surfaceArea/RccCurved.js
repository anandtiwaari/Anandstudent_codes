import { React, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
export const RccCurved = (props) => {
  document.title = props.title;
  const history = useHistory();
  const [frstvar, setfrstvar] = useState("");
  const [scndvar, setscndvar] = useState("");
  const [thirdvar, setthirdvar] = useState("");
  const [answer, setanswer] = useState("");
  const [pehla, setpehla] = useState(0);
  const showsol = () => {
    setpehla(1);
  };
  const handlechange = (e) => {
    setfrstvar(e.target.value);
    // console.log(frstvar);
  };
  const handlechange1 = (e) => {
    setscndvar(e.target.value);
    // console.log(scndvar);
  };
  //   const handlechange2 = (e) => {
  //     setthirdvar(e.target.value);
  //     // console.log(scndvar);
  //   };
  const handlefindgram = () => {
    // let h2 = 2 * frstvar;
    // let LplusB = scndvar + thirdvar;
    setanswer(2 * 3.14 * scndvar * frstvar + "  in²");
    // setanswer(2 * frstvar * (scndvar + thirdvar) + " m²");
    console.log(scndvar + "length");
    console.log(frstvar + "height");
    console.log(thirdvar + "breadth");
    // let a = 3;
    // let b = 4;
    // let c = 6;
    // let hanji = scndvar + thirdvar;
    // finally it-works console.log((frstvar * scndvar + frstvar * thirdvar) * 2 + "haa");
    // console.log(2 * frstvar * (scndvar + thirdvar));
    // console.log(2 * 5 * (23 + 5));
    // console.log(scndvar);
    // let oneset = (scndvar * 1000) / frstvar;
    // setanswer("time badla rolex sab haters no dash");
    // console.log("haa ye kaam karr raha hai");
  };
  return (
    <>
      <div
        className="card text-center bg-dark container my-2 "
        style={{ width: "18rem", color: "white" }}
      >
        <h2>Right Circular CurvedSurface</h2>
        <form className="container text-center">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Enter the Height
            </label>
            <input
              placeholder="enter the values of side"
              onChange={handlechange}
              value={frstvar}
              required
              type="number"
              className="form-control text-center"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Enter The length
            </label>
            <input
              placeholder="enter the value of b  "
              onChange={handlechange1}
              value={scndvar}
              type="number"
              required
              className="form-control text-center"
              id="exampleInputPassword1"
            />
          </div>
          {/* <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Enter The breadth
            </label>
            <input
              placeholder="enter the value of b  "
              onChange={handlechange2}
              value={thirdvar}
              type="number"
              required
              className="form-control text-center"
              id="exampleInputPassword1"
            />
          </div> */}

          <button
            type="button"
            className="btn btn-primary text-center my-2"
            onClick={handlefindgram}
            disabled={!frstvar.length > 0}
          >
            Calculate
          </button>
          <div className="d-flex jsutify-content-center align-items-center">
            <Link
              to="/totalsurface"
              // type="button"
              className="btn btn-primary text-center my-2 mx-2"
              // onClick={handlefindgram}
              // disabled={!frstvar.length > 0 && !scndvar.length > 0}
            >
              Total Surface
            </Link>
            <Link
              to="/volume"
              // type="button"
              className="btn btn-primary text-center my-2 mx-2"
              // onClick={handlefindgram}
              // disabled={!frstvar.length > 0 && !scndvar.length > 0}
            >
              Volume
            </Link>
          </div>
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
            Total Price={frstvar}
          </h1>
          <h1 className={`text-${props.color === "light" ? "dark" : "light"}`}>
            {/* Amount={scndvar} */}
          </h1>
          <h1 className={`text-${props.color === "light" ? "dark" : "light"}`}>
            As We Know The Formula: <h1>Gram=(1000*Amount/Total Price)</h1>
          </h1>
          <h1 className={`text-${props.color === "light" ? "dark" : "light"}`}>
            <h1
              className={`text-${props.color === "light" ? "dark" : "light"}`}
            >
              {/* Gram=(1000*{scndvar}/{frstvar}) */}
            </h1>
          </h1>
          <h1 className={`text-${props.color === "light" ? "dark" : "light"}`}>
            Answer:{answer}
          </h1>
        </div>
      )}
    </>
  );
};
