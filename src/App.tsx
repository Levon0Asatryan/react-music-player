import React, { useState } from "react";
import "./App.css";
import PlayAllButton from "./components/PlayAllButton/PlayAllButton";
import AddAllButton from "./components/AddAllButton/AddAllbutton";
import FilterButton from "./components/FilterButton/FilterButton";
import FilterInput from "./components/FilterInput/FilterInput";
import SongList from "./components/SongList/SongList";
import MusicUploadForm from "./components/MusicUploadForm/MusicUploadForm";
import { Song } from "./utils/type";

function App() {
  const [songsList, setSongsList] = useState<Song[]>([]);

  const uploadSong = (song: Song) => {
    setSongsList((prev) => [...prev, song]);
  };

  return (
    <div className="App">
      <div className="Header">
        <div className="HeaderButtonsContainer">
          <PlayAllButton />
          <AddAllButton />
        </div>
        <div className="HeaderFilterContainer">
          <FilterButton />
          <FilterInput />
        </div>
      </div>
      <SongList songs={songsList} />
      <MusicUploadForm uploadSong={uploadSong} lastTrack={songsList.length} />
    </div>
  );
}

export default App;
