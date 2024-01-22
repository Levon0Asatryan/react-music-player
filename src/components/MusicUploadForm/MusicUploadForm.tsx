import React, { ChangeEvent, useState, MouseEvent } from "react";
import "./MusicUploadForm.css";
import { MdUpload } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { Song, songInitalState } from "../../utils/type";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { removeFileExtension } from "../../utils/helperFunctions";

type Props = {
  uploadSong: Function;
  lastTrack: number;
};

const MusicUploadForm = ({ uploadSong, lastTrack }: Props) => {
  const [selectedSong, setSelectedSong] = useState<Song>(songInitalState);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [isWrongType, setIsWrongType] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;

    if (fileList && fileList.length > 0) {
      const selectedFile: File = fileList[0];
      const allowedTypes = [".mp3", ".wav"];

      // Check if the file has an allowed extension
      const fileExtension = selectedFile.name.split(".").pop()?.toLowerCase();
      if (fileExtension && allowedTypes.includes(`.${fileExtension}`)) {
        setIsWrongType(false);
        simulateFileUpload(selectedFile);
        // Your file handling logic goes here
      } else {
        setIsWrongType(true);
        console.log("Invalid file type");
        // Handle invalid file type
      }
    } else {
      console.log("No file selected");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSelectedSong((prevSong) => ({
      ...prevSong,
      [name]: value,
    }));
  };

  const simulateFileUpload = (file: File) => {
    // Simulate the progress with a timer
    let progress = 0;

    const uploadInterval = setInterval(() => {
      progress += 10;

      // Update the progress state
      setUploadProgress(progress);

      // Check if upload is complete
      if (progress === 100) {
        clearInterval(uploadInterval);

        // Update the state with the selected file
        setSelectedSong((prevSong) => ({
          ...prevSong,
          songName: removeFileExtension(file.name),
          artistName: "Unknown",
          track: lastTrack + 1,
          file,
        }));

        // Reset the progress state
        setUploadProgress(null);
      }
    }, 300); // Adjust the interval based on your preference
  };

  const handleDeleteClick = () => {
    // Clear the selected file and reset the progress
    setSelectedSong(songInitalState);
    setUploadProgress(null);
  };

  const handleUploadClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setTimeout(() => {
      uploadSong(selectedSong);
      handleDeleteClick();
    }, 1000);
  };

  return (
    <div className="MusicFormContainer">
      <form>
        <div className="MusicInputContainer">
          <input
            placeholder="Song Name"
            className="MusicInput"
            type="text"
            name="songName"
            value={selectedSong.songName}
            onChange={handleInputChange}
          />
          <input
            placeholder="Artist Name"
            className="MusicInput"
            type="text"
            name="artistName"
            value={selectedSong.artistName}
            onChange={handleInputChange}
          />
        </div>
        {isWrongType && (
          <ErrorMessage error="Error: Invalid file type. Please choose a valid .mp3 or .wav file." />
        )}

        {!selectedSong.file && uploadProgress !== null && (
          <div className="SongLoadingContainer">
            <div
              className="SongLoading"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        )}

        <div className="UploadButtonsContainer">
          <button
            onClick={(e) => {
              handleUploadClick(e);
            }}
            disabled={!selectedSong.file || uploadProgress !== null}
            className="UploadButton ButtonMargin"
          >
            <MdUpload className="UploadIcon" />
            Upload
          </button>
          {!selectedSong.file && uploadProgress === null && (
            <div className="MusicFileInputContainer">
              <input
                type="file"
                className="MusicFileInput"
                accept=".mp3, .wav"
                onChange={handleFileChange}
              />
              <button className="UploadButton">Choose a file</button>
            </div>
          )}
          {selectedSong.file && (
            <button className="UploadButton" onClick={handleDeleteClick}>
              <RiDeleteBinFill className="UploadIcon" />
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MusicUploadForm;
