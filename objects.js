var playlist = {artist: song};

function updatePlaylist (playlist, artist, song) {
  playlist[artist]=song;
  return playlist;
};

function removeFromPlaylist (playlist, artist) {
  playlist.delete(artist);
  return playlist;
};
