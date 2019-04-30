import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { AuthUserContext } from "../Session";
import SignOutButton from "../SignOut/SignOut";
import * as ROUTES from "../../constants/routes";
import Logo from "../../assets/logo.svg";
import SearchBar from "../SearchBar/SearchBar";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div className="navigation-component">
    <div className="navigation-component--wrapper">
      <Link to={ROUTES.LANDING} className="link">
        <img src={Logo} alt="" />
      </Link>
      <SearchBar />
      <div className="navigation-component--wrapper__links">
        <Link to={ROUTES.HOME} className="link">
          Home
        </Link>
        <Link to={ROUTES.ACCOUNT} className="link">
          Account
        </Link>
        <Link to={ROUTES.CART} className="link">
          <i className="fas fa-shopping-cart" />
        </Link>
        <SignOutButton />
      </div>
    </div>
  </div>
);

const NavigationNonAuth = () => (
  <div className="navigation-component">
    <div className="navigation-component--wrapper">
      <Link to={ROUTES.LANDING} className="link">
        <img src={Logo} alt="" />
      </Link>
      <div className="navigation-component--wrapper__links">
        <Link to={ROUTES.LANDING}>Landing</Link>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </div>
    </div>
  </div>
);

export default Navigation;
