export type Song = {
  songName: string;
  artistName: string;
  track: number;
  file?: File;
};

export const songInitalState: Song = {
  songName: "",
  artistName: "",
  track: 0,
  file: undefined,
};
