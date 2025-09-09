let nowPlaying = 0;
const playlist = [
  {
    artist: 'Mustard Service',
    title: 'Getting There',
    source: 'assets/sounds/getting_there.mp3'
  },
  {
    artist: 'Radiohead',
    title: 'Jigsaw Falling Into Place',
    source: 'assets/sounds/jigsaw_fallin.mp3'
  }
];

const nextButton = document.getElementById('next-song');
const prevButton = document.getElementById('prev-song');

nextButton.addEventListener('click', () => {
  nowPlaying = (nowPlaying + 1) % playlist.length;
  updateCurrentSong();
  audio.play();
  playState = 'play';
});

prevButton.addEventListener('click', () => {
  // not sure why % doesn't work for negatives :(
  nowPlaying = (nowPlaying + playlist.length - 1) % playlist.length;
  updateCurrentSong();
  audio.play();
  playState = 'play';
});

function updateCurrentSong() {
  document.getElementById('song-title').innerHTML = playlist[nowPlaying].title;
  document.getElementById('song-artist').innerHTML = playlist[nowPlaying].artist;
  audio.setAttribute('src', playlist[nowPlaying].source);
}

updateCurrentSong();