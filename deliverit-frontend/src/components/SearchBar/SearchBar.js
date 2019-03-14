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
      <div className="searchbar-component--description">
        <input
          // onChange={searchTutor}
          type="text"
          placeholder="Search shops and restaurant.."
        />
      </div>
    </div>
  );
};

export default SearchBar;
