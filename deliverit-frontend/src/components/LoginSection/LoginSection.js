import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="loginWrapper">
          <h1>This is the login component.</h1>
          <form className="inputForm">
            <h1 id="formHeader">Login</h1>
            <h2>Username</h2>
            <input className="userLogin" type="text" name="userName" />
            <h2>Password</h2>
            <input className="userLogin" type="text" name="password" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
