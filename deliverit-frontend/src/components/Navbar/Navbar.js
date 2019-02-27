import React from "react";
import "./Navbar.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-component">
      <div className="navbar-component--logo">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-componet--searchbar">
        <SearchBar />
      </div>
      <div className="navbar-component--navbar-links">
        <a href="">LOGIN</a>
        <a href="">SIGNUP</a>
        <a href=""><i class="fas fa-map-marker-alt"></i></a>
      </div>
    </div>
  );
};

export default Navbar;
