export const removeFileExtension = (songName: string): string => {
  const extensionsToRemove = [".mp3", ".wav"];

  // Loop through each extension and remove it if found at the end of the song name
  for (const extension of extensionsToRemove) {
    if (songName.toLowerCase().endsWith(extension)) {
      return songName.slice(0, -extension.length).trim();
    }
  }

  // If no extension is found, return the original song name
  return songName;
};
