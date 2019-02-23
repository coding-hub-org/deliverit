import React, { Component } from 'react';
import './App.css';
import DeliveryDetailForm from "./components/DeliveryDetailForm/DeliveryDetailForm";
import Footer from './components/Footer/Footer';

// TODO: Delete and move to corresponding section
// Import component
//import test component

import CartOrder from './components/CartOrder/CartOrder';
// import TestComponent from "./components/TestComponent/TestComponent";
var testList=[
  {name :"Gaurav" , quantity : 1, price: 1},
  {name :"Logo", quantity: 2, price :100}
]
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
        <CartOrder listOfItem={testList}/>
        
        <Footer/>
    
        
        
      </div>
    );
  }
}

export default App;
