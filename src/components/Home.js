import React from "react";

export const Home = (props) => {
  document.title = props.title;
  return (
    <div>
      <h1 style={{ color: props.color === "light" ? "black" : "white" }}>
        its a Home Component
      </h1>
    </div>
  );
};
