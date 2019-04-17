import React, { Component } from "react";
import { withFirebase } from "../../components/Firebase";
import * as ROUTES from "../../constants/routes";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import "./SignUpSection.css";
import Footer from "../../components/Footer/Footer";
import RegisterImage from "../../assets/register-img.svg";
import LogoImage from "../../assets/logo.svg";

const INITIAL_STATE = {
  fullName: "",
  emailAddress: "",
  phone: "",
  address: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

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

class SignUpFormBase extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = event => {
    const { fullName, emailAddress, phone, address, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(emailAddress, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
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
        phoneNum: phone
      })
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const {
      fullName,
      emailAddress,
      phone,
      address,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      emailAddress === "" ||
      fullName === "" ||
      phone === "" ||
      address === "";

    return (
      <form onSubmit={this.onSubmit}>
        <div className="signup-section--left__middle--container">
          <div className="signup-section--left__middle--col1">
            <p>Full Name</p>
            <input
              name="fullName"
              value={fullName}
              onChange={this.onChange}
              type="text"
              placeholder="Full Name"
            />
            <p>Email</p>
            <input
              name="emailAddress"
              value={emailAddress}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <p>Phone</p>
            <input
              name="phone"
              value={phone}
              onChange={this.onChange}
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div className="signup-section--left__middle--col2">
            <p>Address</p>
            <input
              name="address"
              value={address}
              onChange={this.onChange}
              type="text"
              placeholder="Address"
            />
            <p>Password</p>
            <input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            <p>Confirm Password</p>
            <input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
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
  }
}

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
