import React, { Component } from 'react';
import './App.css';
import TestComponent from "./components/TestComponent/TestComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        Welcome to DeliverIt.

        These are the new changes in LIfe.

        <TestComponent />
      </div>
    );
  }
}

export default App;
