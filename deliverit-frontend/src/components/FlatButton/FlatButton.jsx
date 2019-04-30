import React from "react";
import "./FlatButton.css";

const FlatButton = ({ onClick, title }) => {
  return (
    <div className="flat-button-component">
      <button className="flat-button" onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default FlatButton;
