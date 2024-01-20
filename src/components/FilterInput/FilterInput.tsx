import "./FilterInput.css";
import { FiSearch } from "react-icons/fi";

type Props = {};

const FilterInput = (props: Props) => {
  return (
    <div className="FilterInputContainer">
      <div className="SearchIconContainer">
        <FiSearch className="SearchIcon" />
      </div>
      <input className="SearchInput" placeholder="Filter" />
    </div>
  );
};

export default FilterInput;
