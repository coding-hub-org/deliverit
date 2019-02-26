import React, { Component } from "react";
import "./FlatButton.css";

class FlatButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flat-button-wrapper">
        <button className="flat-button" onClick={this.props.onClick}>
          <p>{this.props.title}</p>
        </button>
      </div>
    );
  }
}

export default FlatButton;
