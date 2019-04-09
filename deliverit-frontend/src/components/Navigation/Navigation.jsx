import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut/SignOut';
import * as ROUTES from '../../constants/routes';
import Logo from "../../assets/logo.svg";
import SearchBar from '../SearchBar/SearchBar';

const Navigation = () => (
    <div>
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? <NavigationAuth /> : <NavigationNonAuth />
        }
      </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (
  <div className="navigation-component">
    <div className="navigation-component--wrapper">
      <img src={Logo} alt="" />
      <SearchBar/>
      <div className="navigation-component--wrapper__links">
        <Link to={ROUTES.EXPLORE}>Landing</Link>
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
        <Link to={ROUTES.CART}>
          <i className="fas fa-shopping-cart"></i>
        </Link>
        <SignOutButton />
      </div>
    </div>
  </div>
);

const NavigationNonAuth = () => (
  <div className="navigation-component">
    <div className="navigation-component--wrapper">
      <img src={Logo} alt="" />
      <div className="navigation-component--wrapper__links">
        <Link to={ROUTES.EXPLORE}>Landing</Link>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </div>
    </div>
  </div>
);

export default Navigation;