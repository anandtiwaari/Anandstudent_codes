import React from "react";

export const About = (props) => {
  document.title = props.title;
  return (
    <div>
      <h1 style={{ color: props.color === "light" ? "black" : "white" }}>
        its a About Component
      </h1>
    </div>
  );
};
