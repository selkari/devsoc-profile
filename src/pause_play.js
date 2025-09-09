const audio = document.getElementById('music');

// pause/play
const playButton = document.getElementById('play');
let playState = 'pause';

playButton.addEventListener('click', () => {
  if (playState == 'pause') {
    playState = 'play';
    audio.play();
    console.log('playing');
  } else {
    playState = 'pause';
    audio.pause();
    console.log('paused');
  }
});
