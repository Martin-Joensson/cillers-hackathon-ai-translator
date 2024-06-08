import "./Searchbar.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const Searchbar = () => {
  return (
    <div className="search-container">
      <label>
        <FaMagnifyingGlass className="search-icon" />
        <input type="text" placeholder="Search language ..." />
      </label>
    </div>
  );
};
