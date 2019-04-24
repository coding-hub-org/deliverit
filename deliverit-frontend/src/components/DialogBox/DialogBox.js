import React, { useState } from "react";
import "./DialogBox.css";
import FlatButton from "../FlatButton/FlatButton";

const DialogBox = props => {
  const [address, setAddress] = useState("");

  const handleChange = e => {
    setAddress(e.target.value);
  };

  const handleClick = e => {
    if (address !== "") {
      fetch("http://127.0.0.1:3000/addresses", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: props.email,
          newAddress: address
        })
      });
      props.close();
    }
  };

  const handleBackgroundClick = e => {
    e.preventDefault();
    if (e.target.className === "dialogbox-component") {
      props.close();
    }
  };

  return (
    <div onClick={handleBackgroundClick} className="dialogbox-component">
      <div className="dialogbox-component_contents">
        <h1>{props.title}</h1>
        <input
          placeholder="New address.."
          onChange={handleChange}
          type="text"
          autoComplete="false"
        />
        <FlatButton
          className="dialogbox-component_contests--button"
          title={props.function}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default DialogBox;
