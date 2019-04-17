import React from "react";
import searchIcon from "../../assets/search.svg";
import "./SearchBar.css";

const SearchBar = ({ handleSearch }) => {
  const searchTutor = e => {
    handleSearch(e);
  };

  return (
    <div className="searchbar-component">
      <div className="searchbar-component--icon">
        <img src={searchIcon} alt="Search" />
      </div>
      <input
        type="text"
        placeholder="Search shops and restaurant"
      />
    </div>
  );
};

export default SearchBar;
