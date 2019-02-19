import React, { Component } from "react";
import "./App.css";
// import TestComponent from "./components/TestComponent/TestComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        {/* <TestComponent /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
