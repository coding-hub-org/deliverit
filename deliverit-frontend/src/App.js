import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginSection from "./components/LoginSection/LoginSection";
import RegisterCustomerSection from "./sections/RegisterCustomerSection/RegisterCustomerSection";
import CartPageSection from "./sections/CartPageSection/CartPageSection";
import Navbar from "./components/Navbar/Navbar";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <LoginSection /> */}
        {/* <Footer /> */}
        {/* <CartPageSection /> */}
        <RegisterCustomerSection />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
