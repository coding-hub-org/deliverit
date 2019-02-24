import React, { Component } from "react";
import "./Header.css";
import Navbar from "../../components/Navbar/Navbar";

class Header extends Component {
  render() {
    return (
      <div className="header-section">
        <Navbar />
      </div>
    );
  }
}

export default Header;
