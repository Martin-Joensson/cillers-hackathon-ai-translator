import { FaMagnifyingGlass } from "react-icons/fa6";

export const Searchbar = () => {
  return (
    <label>
      <FaMagnifyingGlass />
      <input type="text" placeholder="Search language..." />
    </label>
  );
};
