import React, { Component } from "react";
import "./App.css";
import TestComponent from "./components/TestComponent/TestComponent";
import UserProfileSection from "./sections/UserProfileSection/UserProfileSection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProfileSection />
      </div>
    );
  }
}

export default App;
