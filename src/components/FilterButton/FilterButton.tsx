import React from "react";
import "./FilterButton.css";
import { RiArrowUpDownFill } from "react-icons/ri";
import { IoCaretDownSharp } from "react-icons/io5";

type Props = {};

const FilterButton = (props: Props) => {
  return (
    <div className="FillterButtonContainer">
      <div className="UpDownIconContainer">
        <RiArrowUpDownFill className="UpDownIcon" />
      </div>
      <div className="FilterButtonText">Track Number</div>
      <div className="OpenIconContainer">
        <IoCaretDownSharp className="OpenIcon" />
      </div>
    </div>
  );
};

export default FilterButton;
