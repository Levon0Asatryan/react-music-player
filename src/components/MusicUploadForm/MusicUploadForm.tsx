import React, { ChangeEvent, useState } from "react";
import "./MusicUploadForm.css";
import { Song, songInitalState } from "../../utils/type";

type Props = {};

const MusicUploadForm = (props: Props) => {
  const [selectedSong, setSelectedSong] = useState<Song>(songInitalState);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;

    if (fileList && fileList.length > 0) {
      const selectedFile: File = fileList[0];

      simulateFileUpload(selectedFile);
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
          songName: file.name,
          artistName: "Unknown",
          file,
        }));

        // Reset the progress state
        setUploadProgress(null);
      }
    }, 500); // Adjust the interval based on your preference
  };

  const handleDeleteClick = () => {
    // Clear the selected file and reset the progress
    setSelectedSong(songInitalState);
    setUploadProgress(null);
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

        {selectedSong.file ? (
          <div>
            <button onClick={handleDeleteClick}>Delete</button>
          </div>
        ) : (
          <div>
            <input
              type="file"
              accept=".mp3, .wav"
              onChange={handleFileChange}
            />

            {uploadProgress !== null && (
              <div>
                <p>Uploading...</p>
                <progress value={uploadProgress} max="100"></progress>
              </div>
            )}
          </div>
        )}
        <div>upload button</div>
      </form>
    </div>
  );
};

export default MusicUploadForm;
