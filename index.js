const gong = document.getElementById('gong');
let sound = document.getElementById('sound');

gong.addEventListener('click', () => {
  if (!sound) {
    sound = document.getElementById('sound');
  }

  if (!sound.paused) {
    sound.pause();
    sound.currentTime = 0;
  }

  sound.play();
});
