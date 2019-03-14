import React from "react";
import "./Title.css";

const Title = props => {
  return (
    <div className="title-component">
      {props.title}
      <hr />
    </div>
  );
};

export default Title;
