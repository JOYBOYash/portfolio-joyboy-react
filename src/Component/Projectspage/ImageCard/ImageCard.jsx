import React from "react";
import Button from "../../Button/Button";
import "./imagecard.css";
function ImageCard(props) {
  const img = props.img;
  const title = props.title;
  const desc = props.desc;
  const src = props.src;
  return (
    <div className="images">
      <img src={img} alt="" className="image" />
      <h2 className="pname">{title}</h2>
      <p className="pdesc">{desc}</p>
      <Button source={src} label="Visit Repo in GitHub &rarr;"></Button>
    </div>
  );
}

export default ImageCard;
