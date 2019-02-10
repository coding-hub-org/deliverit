import React, { Component } from 'react';
import './App.css';
import Login from "./components/Login/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        Welcome to DeliverIt.

        These are the new changes in LIfe.

        <Login />
      </div>
    );
  }
}

export default App;
