import React from "react";
import "./searchBox.styles.css";

export const SearchBar = ({ handleChange, placeholder }) => {
  return (
    <input
      className="search"
      type="search"
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
