import React, { Component } from "react";
import "./LoginSection.css";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="loginWrapper">
          <form className="inputForm">
            <h1 id="formHeader">Login</h1>
            <h2>Username</h2>
            <input
              className="userLogin"
              type="text"
              name="userName"
              placeholder="Username here"
            />
            <h2>Password</h2>
            <input
              className="userLogin"
              type="text"
              name="password"
              placeholder="**********"
            />
            <button className="loginButton">Login</button>
            <h3>
              Forgot your password?<span className="textLink"> Click here</span>
            </h3>

            <h4>
              Dont have an account yet?<span> Register here</span>
            </h4>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
