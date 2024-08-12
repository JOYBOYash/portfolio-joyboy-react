import React from "react";
import "./button.css";
function Button(props) {
  const label = props.label;
  const source = props.source;
  return (
    <div>
      <a href={source} target="_blank">
        {" "}
        <button className="btn"> {label} </button>
      </a>
    </div>
  );
}

export default Button;
