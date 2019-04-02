import React, { Component } from "react";
import "./LoginSection.css";

class Login extends Component {
  render() {
    return (
      <div className="LoginSection-section">
        <div className="LoginSection-section--loginWrapper__birdLogo">
          <img src={require("../../assets/logo.png")} />
        </div>
        <div className="LoginSection-section--loginWrapper">
          <div className="LoginSection-section--loginWrapper__alignDiv ">
            <form className="LoginSection-section--loginWrapper__alignDiv--loginForm">
              <h1 id="formHeader">Login</h1>
              <h2>Username</h2>
              <input
                className="LoginSection-section--loginWrapper__alignDiv--loginForm__userLogin"
                type="text"
                name="userName"
                placeholder="Username"
              />
              <h2>Password</h2>
              <input
                className="LoginSection-section--loginWrapper__alignDiv--loginForm__userLogin"
                type="password"
                name="password"
                placeholder="**********"
              />
              <div className="LoginSection-section--loginWrapper__alignDiv--loginForm__buttonDiv">
                <button className="LoginSection-section--loginWrapper__alignDiv--loginForm__loginButton">
                  LOGIN
                </button>
              </div>
              <h3>
                Forgot your password?
                <span className="textLink">
                  <a href="#">Click here</a>
                </span>
              </h3>

              <h4>
                Dont have an account yet?
                <span>
                  <a href="#">Register here</a>
                </span>
              </h4>
            </form>
          </div>
          <div className="LoginSection-section--loginWrapper__alignDiv--leaningLogo">
            <img
              src={require("../../assets/login-img.svg")}
              className="LoginSection-section--loginWrapper__alignDiv--leaningLogo__leaningMan"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
