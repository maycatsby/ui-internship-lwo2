/* global document */
const videoModule = (() => {
  const playBtn = document.querySelector('.btn-video');
  const bgVideo = document.querySelector('video');

  const playState = (evt) => {
    evt.preventDefault();
    if (playBtn.classList.contains('pause')) {
      bgVideo.play();
    } else {
      bgVideo.pause();
    }
    playBtn.classList.toggle('play');
    playBtn.classList.toggle('pause');
  };

  return {
    init: () => {
      playBtn.addEventListener('click', playState);
    },
  };
})();

export default videoModule;
