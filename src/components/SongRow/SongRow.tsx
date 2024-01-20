import React from "react";
import "./SongRow.css";
import { Song } from "../../utils/type";
import { PiDotsNineBold } from "react-icons/pi";
import { IoMdPlay } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { IoCaretDownSharp } from "react-icons/io5";

type Props = {
  song: Song;
};

const SongRow = ({ song }: Props) => {
  return (
    <tr key={song.track} className="rowContainer">
      <td className="row">
        <div className="icons">
          <PiDotsNineBold className="icon item" />
          <IoMdPlay className="icon item" />
        </div>
      </td>
      <td className="item name row">{song.songName}</td>
      <td className="item name row">{song.artistName}</td>
      <td className="item name row">{song.track}</td>
      <td className=" row">
        <div className="icons">
          <FaHeart className="icon item" />
          <FaCheck className="icon item" />
          <IoIosShareAlt className="icon item" />
          <IoCaretDownSharp className="icon item" />
        </div>
      </td>
    </tr>
  );
};

export default SongRow;
