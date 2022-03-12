import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
export const Areacircle = (props) => {
  document.title = props.title;
  const history = useHistory();
  const [frstvar, setfrstvar] = useState("");
  //   const [scndvar, setscndvar] = useState();
  const [answer, setanswer] = useState("");

  const handlechange = (e) => {
    setfrstvar(e.target.value);
  };

  const handlearea = () => {
    setanswer(2 * 3.14 * frstvar + " = πr²");
  };
  //   const [answer, setanswer] = useState("");
  return (
    <>
      <div
        className="card text-center container bg-dark my-2"
        style={{ width: "18rem", color: "white" }}
      >
        <h2 className="flex">Area Of Circle</h2>
        <form className="container text-center">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Enter Value of Radius
            </label>
            <input
              placeholder="enter the values of Radius "
              onChange={handlechange}
              value={frstvar}
              type="number"
              required
              class="form-control text-center"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          {/* <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Enter Value of b
            </label>
            <input
              placeholder="enter the value of b  "
              onChange={handlechange1}
              value={scndvar}
              type="text"
              class="form-control text-center"
              id="exampleInputPassword1"
            />
          </div> */}

          <button
            type="button"
            class="btn btn-primary text-center my-2"
            onClick={handlearea}
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
      </div>
    </>
  );
};
