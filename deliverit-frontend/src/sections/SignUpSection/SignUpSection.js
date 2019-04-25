import React, { useState } from "react";
import { withFirebase } from "../../components/Firebase";
import * as ROUTES from "../../constants/routes";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import "./SignUpSection.css";
import Footer from "../../components/Footer/Footer";
import RegisterImage from "../../assets/register-img.svg";
// import { useHttpPost } from "../../hooks/http";

const SignUpSection = () => (
  <div className="signup-section">
    <div className="signup-section--wrapper">
      <div className="signup-section--left">
        <div className="signup-section--left__middle">
          <h1>SIGN UP</h1>
          <p>Welcome back! Log in to start your delivery</p>
          <SignUpForm />
        </div>
      </div>
      <div className="signup-section--right">
        <div className="signup-section--right">
          <img src={RegisterImage} alt="Delivery guy img" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

const SignUpFormBase = props => {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = event => {
    props.firebase
      .doCreateUserWithEmailAndPassword(emailAddress, passwordOne)
      .then(authUser => {
        props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        setError(error);
      });
    event.preventDefault();

    //store to database
    fetch("http://127.0.0.1:3000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: emailAddress,
        fullName: fullName,
        clientId: "2345234523452345234523452345",
        phoneNum: phone,
        address: address
      })
    });
  };

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === "" ||
    emailAddress === "" ||
    fullName === "" ||
    phone === "" ||
    address === "";

  return (
    <form onSubmit={onSubmit}>
      <div className="signup-section--left__middle--container">
        <div className="signup-section--left__middle--col1">
          <p>Full Name</p>
          <input
            name="fullName"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
          <p>Email</p>
          <input
            name="emailAddress"
            value={emailAddress}
            onChange={e => setEmailAddress(e.target.value)}
            type="text"
            placeholder="Email Address"
          />
          <p>Phone</p>
          <input
            name="phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            type="text"
            placeholder="Phone Number"
          />
        </div>
        <div className="signup-section--left__middle--col2">
          <p>Address</p>
          <input
            name="address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            type="text"
            placeholder="Address"
          />
          <p>Password</p>
          <input
            name="passwordOne"
            value={passwordOne}
            onChange={e => setPasswordOne(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <p>Confirm Password</p>
          <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={e => setPasswordTwo(e.target.value)}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <button disabled={isInvalid} type="submit">
        Sign Up
      </button>
      {error && <p>{error.message}</p>}
    </form>
  );
};

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);

export default SignUpSection;

export { SignUpForm, SignUpLink };
