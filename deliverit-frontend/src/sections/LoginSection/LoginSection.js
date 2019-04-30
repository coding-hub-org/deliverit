import React, { useState } from "react";
import LoginImage from "../../assets/login-img.svg";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../../components/Firebase";
import { compose } from "recompose";
import { SignUpLink } from "../SignUpSection/SignUpSection";
import * as ROUTES from "../../constants/routes";
import { Helmet } from "react-helmet";

// Add style file
import "./LoginSection.css";

const LoginSection = () => (
  <div className="login-section">
    <Helmet>
      <title>DeliverIt | Login</title>
    </Helmet>
    <div className="login-section--wrapper">
      <div className="login-section--left">
        <div className="login-section--left__middle">
          <h1>LOGIN</h1>
          <p>Welcome back! Log in to start your delivery</p>
          <SignInForm />
          <SignUpLink />
        </div>
      </div>
      <div className="login-section--right">
        <div className="login-section--right">
          <img src={LoginImage} alt="Delivery guy img" />
        </div>
      </div>
    </div>
  </div>
);

const SignInFormBase = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = event => {
    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        setError(error);
      });

    event.preventDefault();
  };

  const onChange = event => {
    event.target.name === "email"
      ? setEmail(event.target.value)
      : setPassword(event.target.value);
  };

  const isInvalid = password === "" || email === "";

  return (
    <form onSubmit={onSubmit}>
      <p>Username</p>
      <input
        name="email"
        value={email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />

      <p>Password</p>
      <input
        name="password"
        value={password}
        onChange={onChange}
        type="password"
        placeholder="Password"
      />

      <button disabled={isInvalid} type="submit">
        LOGIN
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

withRouter(withFirebase(SignInForm));

export default LoginSection;

export { SignInForm };
