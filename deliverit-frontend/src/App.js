import React, { Component } from 'react';
import './App.css';
import Login from "./components/Login/Login";
import DeliveryDetailForm from "./components/DeliveryDetailForm/DeliveryDetailForm";
import Footer from './components/Footer/Footer';

// TODO: Delete and move to corresponding section
// Import component

class App extends Component {
  render() {
    return (
      <div className="App">
        Welcome to DeliverIt.

        These are the new changes in LIfe.

        <DeliveryDetailForm 
        clientName="Gaurav Jayasawal" 
        address1="Mason Hall, Room 209"
        address2="Plattsburgh, NY 12901"
        address3="USA"
        email="jgaurav6@gmail.com"
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
