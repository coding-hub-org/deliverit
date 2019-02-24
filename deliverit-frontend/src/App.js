import React, { Component } from 'react';
import './App.css';

import RegisterCustomerSection from "./sections/RegisterCustomerSection/RegisterCustomerSection"

// TODO: Delete and move to corresponding section
// Import component


// import TestComponent from "./components/TestComponent/TestComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RegisterCustomerSection />
      </div>
    );
  }
}

export default App;
