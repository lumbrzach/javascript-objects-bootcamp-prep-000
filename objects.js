var playlist = {artist: "song"};

function updatePlaylist (playlist, artist, song) {
  playlist[artist]=song;
  return playlist;
};

function removeFromPlaylist (playlist, artist) {
  var artist = 'Slowdive';
  delete playlist.artist;
  return playlist;
};
