import React, { Component } from "react";
import "./DialogBox.css";
import FlatButton from "../FlatButton/FlatButton";

class DialogBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: true,
      address: ""
    };
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ address: e.target.value });
  };

  handleClick = e => {
    if (this.state.address !== "") {
      fetch("http://127.0.0.1:3000/addresses", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: "jgaurav6@gmail.com",
          newAddress: this.state.address
        })
      });
      this.props.close();
    }
  };

  handleBackgroundClick = e => {
    e.preventDefault();
    if (e.target.className === "dialogbox-component") {
      this.props.close();
    }
  };

  render() {
    return (
      <div onClick={this.handleBackgroundClick} className="dialogbox-component">
        <div className="dialogbox-component_contents">
          <h1>{this.props.title}</h1>
          <input
            placeholder="New address.."
            onChange={this.handleChange}
            type="text"
            autoComplete="false"
          />
          <FlatButton
            className="dialogbox-component_contests--button"
            title={this.props.function}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default DialogBox;
