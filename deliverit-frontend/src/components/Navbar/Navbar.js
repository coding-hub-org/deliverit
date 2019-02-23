import React from "react";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-component">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="searchbar">
        <SearchBar />
      </div>
      <div className="navbar-links"> LINKS </div>
    </div>
  );
};

export default Navbar;
