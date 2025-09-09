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

const audio = document.getElementById('music');
const playButton = document.getElementById('play');
let playState = 'pause';

playButton.addEventListener('click', () => {
  if (playState == 'pause') {
    playState = 'play';
    audio['play']();
  } else {
    playState = 'pause';
    audio['pause']();
  }
  console.log('switched to ', playState);
  console.log('interaction done');
});


