import React from "react";
import "./App.css";
import PlayAllButton from "./components/PlayAllButton/PlayAllButton";
import AddAllButton from "./components/AddAllButton/AddAllbutton";
import FilterButton from "./components/FilterButton/FilterButton";
import FilterInput from "./components/FilterInput/FilterInput";
import SongList from "./components/SongList/SongList";

function App() {
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
      <SongList />
    </div>
  );
}

export default App;
