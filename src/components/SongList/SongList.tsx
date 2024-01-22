import React from "react";
import "./SongList.css";
import { Song } from "../../utils/type";
import SongRow from "../SongRow/SongRow";

type Props = {
  songs: Song[];
};

const SongList = ({ songs }: Props) => {
  return (
    <table className="SongTable">
      <thead>
        <tr className="TablesNames">
          <th className="FirstEmpty"></th>
          <th className="SongName">Song Name</th>
          <th className="ArtistName">Artist Name</th>
          <th className="Track">Track</th>
          <th className="LastEmpty"></th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => (
          <SongRow song={song} key={song.track} />
        ))}
      </tbody>
    </table>
  );
};

export default SongList;
