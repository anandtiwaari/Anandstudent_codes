import { React, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
export const Findprice = (props) => {
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
    // console.log(frstvar);
  };
  const handlechange1 = (e) => {
    setscndvar(e.target.value);
    // console.log(scndvar);
  };
  const handlefindgram = () => {
    if (frstvar && scndvar) {
      setanswer((frstvar * scndvar) / 1000 + "Price");
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
      setanswer((frstvar * scndvar) / 1000 + "Price");
    }

    console.log(frstvar);
    console.log(scndvar);
    // let oneset = (scndvar * 1000) / frstvar;
    // setanswer("time badla rolex sab haters no dash");
    // console.log("haa ye kaam karr raha hai");
  };
  return (
    <>
      <div
        className="card text-center bg-dark container my-2"
        style={{ width: "18rem", color: "white" }}
      >
        <h2>Find Price</h2>
        <form className="container text-center">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Enter the Total Price
            </label>
            <input
              placeholder="enter the values of a "
              onChange={handlechange}
              value={frstvar}
              onClick={() => {
                setpehla(0);
                setanswer("");
              }}
              required
              type="number"
              className="form-control text-center"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Enter The Gram
            </label>
            <input
              placeholder="enter the value of b"
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
            onClick={handlefindgram}
            disabled={!frstvar.length > 0 && !scndvar.length > 0}
          >
            Calculate
          </button>
          <Link
            to="/findgram"
            // type="button"
            className="btn btn-primary text-center my-2 mx-2"
            // onClick={handlefindgram}
            // disabled={!frstvar.length > 0 && !scndvar.length > 0}
          >
            Find-Gram
          </Link>
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
            Amount={scndvar}
          </h1>
          <h1 className={`text-${props.color === "light" ? "dark" : "light"}`}>
            As We Know The Formula: <h1>Price=(Total Price*Amount/1000)</h1>
          </h1>
          <h1 className={`text-${props.color === "light" ? "dark" : "light"}`}>
            <h1
              className={`text-${props.color === "light" ? "dark" : "light"}`}
            >
              Price=({frstvar}*{scndvar}/1000)
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
