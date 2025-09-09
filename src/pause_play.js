const audio = document.getElementById('music');
const disc = document.getElementById('disc-sprite');

// pause/play
const playButton = document.getElementById('play');
let playState = 'pause';

playButton.addEventListener('click', () => {
  if (playState == 'pause') {
    playState = 'play';
    audio.play();
    disc.style.animationPlayState = 'running';
    console.log('playing');
  } else {
    playState = 'pause';
    audio.pause();
    disc.style.animationPlayState = 'paused';
    console.log('paused');
  }
});
