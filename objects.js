var playlist = {artistName: "song"};

function updatePlaylist (playlist, artistName, song) {
  playlist[artistName]=song;
  return playlist;
};

function removeFromPlaylist (playlist, artistName) {
  delete playlist.'Slowdive';
  return playlist;
};
