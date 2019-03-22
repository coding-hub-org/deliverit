import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UserProfileSection from "./sections/UserProfileSection/UserProfileSection";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <UserProfileSection
          overallRating={3.7}
          deliveryCount={69}
          userName={"Hung Nguyen"}
          phone={"xxx-xxxx-xxx"}
          email={"hnguy011@plattsburgh.edu"}
        />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
