let nowPlaying = 0;
const playlist = [
  {
    artist: 'Mustard Service',
    title: 'Getting There',
    source: 'https://files.catbox.moe/sz1iod.mp3'
  },
  {
    artist: 'Radiohead',
    title: 'Jigsaw Falling Into Place',
    source: 'https://files.catbox.moe/g0dpcs.mp3'
  },
  {
    artist: 'Will Wood',
    title: '...well, better than the alternative',
    source: 'https://files.catbox.moe/l0iuju.mp3'
  },
  {
    artist: 'Glass Beach',
    title: 'The CIA',
    source: 'https://files.catbox.moe/gfgd00.mp3'
  },
  {
    artist: 'Will Wood and the Tapeworms',
    title: 'Skeleton Appreciation Day in Vestal, NY (Bones)',
    source: 'https://files.catbox.moe/inu7gl.mp3'
  },
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