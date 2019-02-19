import React, { Component } from 'react';
import './App.css';
import Login from "./components/Login/Login";
import Footer from './components/Footer/Footer';

// TODO: Delete and move to corresponding section
// Import component

class App extends Component {
  render() {
    return (
      <div className="App">
        Welcome to DeliverIt.

        These are the new changes in LIfe.

        <Login />
        <Footer/>
      </div>
    );
  }
}

export default App;
