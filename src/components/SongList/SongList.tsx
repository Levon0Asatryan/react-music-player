import React from "react";
import "./SongList.css";
import { Song } from "../../utils/type";
import SongRow from "../SongRow/SongRow";

type Props = {};

const SongList = (props: Props) => {
  const songs: Song[] = [
    { songName: "Halo", artistName: "BlackBird", track: 1 },
    { songName: "Blind", artistName: "BlackBird", track: 2 },
    { songName: "Starlight", artistName: "BlackBird", track: 3 },
    { songName: "Starlight", artistName: "BlackBird", track: 3 },
    { songName: "Starlight", artistName: "BlackBird", track: 3 },
    {
      songName: "Starliasdasssssssssssssssssssssssssssssssssssssssssght",
      artistName: "BlackBird",
      track: 3,
    },
    { songName: "Starlight", artistName: "BlackBird", track: 3 },
    { songName: "Starlight", artistName: "BlackBird", track: 3 },
    { songName: "Starlight", artistName: "BlackBird", track: 3 },
    { songName: "Starlight", artistName: "BlackBird", track: 3 },
    { songName: "Starlight", artistName: "BlackBird", track: 3 },
    { songName: "Starlight", artistName: "BlackBird", track: 3 },
  ];

  return (
    <table className="SongTable">
      <tr className="TablesNames">
        <th className="FirstEmpty"></th>
        <th className="SongName">Song Name</th>
        <th className="ArtistName">Artist Name</th>
        <th className="Track">Track</th>
        <th className="LastEmpty"></th>
      </tr>
      {songs.map((song) => (
        <SongRow song={song} />
      ))}
    </table>
  );
};

export default SongList;
