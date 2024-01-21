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
    <tr key={song.track} className="RowContainer">
      <td className="SongRow">
        <div className="RowIcons">
          <PiDotsNineBold className="RowIcon Item" />
          <IoMdPlay className="RowIcon Item" />
        </div>
      </td>
      <td className="Item RowText SongRow">{song.songName}</td>
      <td className="Item RowText SongRow">{song.artistName}</td>
      <td className="Item RowText SongRow">{song.track}</td>
      <td className=" SongRow">
        <div className="RowIcons">
          <FaHeart className="RowIcon Item" />
          <FaCheck className="RowIcon Item" />
          <IoIosShareAlt className="RowIcon Item" />
          <IoCaretDownSharp className="RowIcon Item" />
        </div>
      </td>
    </tr>
  );
};

export default SongRow;
