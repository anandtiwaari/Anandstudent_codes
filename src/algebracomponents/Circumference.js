import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";
export const Circumference = (props) => {
  document.title = props.title;
  const history = useHistory();
  const [frstvar, setfrstvar] = useState("");
  const [answer, setanswer] = useState("");

  const handlechange = (e) => {
    setfrstvar(e.target.value);
  };
  const handlewholesqr = () => {
    setanswer(Math.round(2 * frstvar * 3.14) + "  ");
  };
  return (
    <div>
      <>
        <div
          className="card text-center container my-2 bg-dark"
          style={{ width: "18rem", color: "white" }}
        >
          <h2>Circumference of Circle</h2>
          <form className="container text-center">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Enter Value of Radius
              </label>
              <input
                placeholder="enter the values of a "
                onChange={handlechange}
                value={frstvar}
                type="number"
                required
                class="form-control text-center"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
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
        </div>
      </>
    </div>
  );
};
