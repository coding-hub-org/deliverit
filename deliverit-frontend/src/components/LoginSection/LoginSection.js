import React, { Component } from "react";
import "./LoginSection.css";

class Login extends Component {
  render() {
    return (
      <div className="LoginSection-section">
        <div className="LoginSection-section--loginWrapper">
          <div className="LoginSection-section--loginWrapper__birdLogo">
           
            <img src={require("../../assets/logo.png")} />
          </div>
          <div className="LoginSection-section--loginWrapper__alignDiv ">
            <form className="LoginSection-section--loginWrapper__alignDiv--loginForm">
              <h1 id="formHeader">Login</h1>
              <h2>Username</h2>
              <input
                className="LoginSection-section--loginWrapper__alignDiv--loginForm__userLogin"
                type="text"
                name="userName"
                placeholder="Username here"
              />
              <h2>Password</h2>
              <input
                className="LoginSection-section--loginWrapper__alignDiv--loginForm__userLogin"
                type="text"
                name="password"
                placeholder="**********"
              />
              <button className="LoginSection-section--loginWrapper__alignDiv--loginForm__loginButton">Login</button>
              <h3>
                Forgot your password?
                <span className="textLink"> <br/> Click here</span>
              </h3>

              <h4>
                Dont have an account yet?<span> <br/> Register here</span>
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
