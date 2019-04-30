import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

// Import Firebase
import { withAuthentication } from "./components/Session";

// Import sections
import LoginSection from "./sections/LoginSection/LoginSection";
import SignUpSection from "./sections/SignUpSection/SignUpSection";
import Navigation from "./components/Navigation/Navigation";
import HomeSection from "./sections/HomeSection/HomeSection";
import LandingSection from "./sections/LandingSection/LandingSection";
import UserProfileSection from "./sections/UserProfileSection/UserProfileSection";
import CheckoutSection from "./sections/CheckoutSection/CheckoutSection";
import DetailsSection from "./sections/DetailsSection/DetailsSection";
import { CheckoutProvider } from "./sections/CheckoutSection/CheckoutSection";
import Fotter from "./components/Footer/Footer";

const App = () => {
  // console.log(this.props);
  return (
    <Router>
      <CheckoutProvider>
        <div className="App">
          <Navigation />
          <Switch>
            {/* Completed */}
            <Route path={ROUTES.SIGN_IN} component={LoginSection} />
            <Route path={ROUTES.SIGN_UP} component={SignUpSection} />
            <Route path={ROUTES.HOME} component={HomeSection} />
            <Route path={ROUTES.DETAILS + "/:id"} component={DetailsSection} />
            <Route path={ROUTES.ACCOUNT} component={UserProfileSection} />
            <Route path={ROUTES.CART} component={CheckoutSection} />
            <Route path={ROUTES.LANDING} component={LandingSection} />
          </Switch>
          {/* <UserProfileSection
              overallRating={3.7}
              deliveryCount={69}
              userName={"Hung Nguyen"}
              phone={"xxx-xxxx-xxx"}
              email={"hnguy011@plattsburgh.edu"}
            /> */}
        </div>
        <Fotter />
      </CheckoutProvider>
    </Router>
  );
};

export default withAuthentication(App);
