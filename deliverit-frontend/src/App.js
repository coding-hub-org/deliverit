import React, { Component } from "react";
import "./App.css";
import Login from "./components/LoginSection/LoginSection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        {/* <TestComponent /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
