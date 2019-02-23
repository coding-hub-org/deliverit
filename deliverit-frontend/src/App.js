import React, { Component } from 'react';
import './App.css';
import DeliveryDetailForm from "./components/DeliveryDetailForm/DeliveryDetailForm";
import Footer from './components/Footer/Footer';

// TODO: Delete and move to corresponding section
// Import component
//import test component
import CartPageSection from './sections/CartPageSection/CartPageSection';
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

        
        <CartPageSection/>
      </div>
    );
  }
}

export default App;
