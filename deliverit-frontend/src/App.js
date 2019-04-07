import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';

// Import sections
import LoginSection from "./sections/LoginSection/LoginSection";
import SignUpSection from "./sections/SignUpSection/SignUpSection";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
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
}

export default App;
