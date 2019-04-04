import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UserProfileSection from "./sections/UserProfileSection/UserProfileSection";
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import RegisterCustomerSection from './sections/RegisterCustomerSection/RegisterCustomerSection'

// Import sections
import LoginSection from "./sections/LoginSection/LoginSection";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            {/* Completed */}
            <Route path="/login" component={LoginSection}/>

            <Route path="/register" component={RegisterCustomerSection}/>
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
      </BrowserRouter>
    );
  }
}

export default App;
