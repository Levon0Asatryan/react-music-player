import "./PlayAllButton.css";
import { IoMdPlay } from "react-icons/io";
import { IoCaretDownSharp } from "react-icons/io5";

type Props = {};

const PlayAllButton = (props: Props) => {
  const PlayButtonClick = () => {
    console.log("Play All");
  };

  return (
    <div className="ButtonContainer" onClick={PlayButtonClick}>
      <div className="ButtonDiv">
        <IoMdPlay className="PlayIcon" /> Play All
      </div>
      <div className="OpenContainer">
        <IoCaretDownSharp className="OpenIcon" />
      </div>
    </div>
  );
};

export default PlayAllButton;
