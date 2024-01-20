//AddAllButton
import "./AddAllButton.css";
import { HiPlus } from "react-icons/hi";
import { IoCaretDownSharp } from "react-icons/io5";

type Props = {};

const AddAllButton = (props: Props) => {
  const AddButtonClick = () => {
    console.log("Add All");
  };

  return (
    <div className="ButtonContainer AddAllContainer" onClick={AddButtonClick}>
      <div className="ButtonDiv">
        <HiPlus className="AddIcon" /> Add All
      </div>
      <div className="OpenContainer">
        <IoCaretDownSharp className="OpenIcon" />
      </div>
    </div>
  );
};

export default AddAllButton;
