import React, { Component } from "react";
import "./ItemTag.css";

//import a test image
import testImage from "../../assets/logo.png";
// ~~~

const ItemTag = props => {
  return (
    <div className="item-tag-component">
      <div>
        <img src={testImage} alt="" />
      </div>
      <div>{props.name}</div>
      <div className="item-tag-component__quantity">
        <span>{props.quantity}</span>
        <div className="item-tag-component__quantity-buttons" />
      </div>
      <div>{props.price}$</div>
    </div>
  );
};

export default ItemTag;
