/* global document*/
const videoEl = document.querySelector('video');
const playButton = document.getElementById('play-button');

function videoToggle() {
  if (videoEl.paused) {
    videoEl.play();
    return;
  }
  videoEl.pause();
}

const videoModule = {
  init: () => {
    playButton.addEventListener('click', videoToggle);
  },
};

export default videoModule;
