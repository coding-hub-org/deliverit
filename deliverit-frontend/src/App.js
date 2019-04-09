import React, { Component } from 'react';
import "./App.css";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';

// Import Firebase
import { withAuthentication } from './components/Session';


// Import sections
import LoginSection from "./sections/LoginSection/LoginSection";
import SignUpSection from "./sections/SignUpSection/SignUpSection";
import Navigation from './components/Navigation/Navigation';


const App = () => {
  
    return (
        <Router>
          <div className="App">
            <Navigation/>
            <Switch>
              {/* Completed */}
              <Route path={ROUTES.SIGN_IN} component={LoginSection}/>
              <Route path={ROUTES.SIGN_UP} component={SignUpSection}/>
            </Switch>
            {/* <Header /> */}
            {/* <UserProfileSection
              overallRating={3.7}
              deliveryCount={69}
              userName={"Hung Nguyen"}
              phone={"xxx-xxxx-xxx"}
              email={"hnguy011@plattsburgh.edu"}
            /> */}
            {/* <Footer /> */}
          </div>
        </Router>
    );
  
}

export default withAuthentication(App);
