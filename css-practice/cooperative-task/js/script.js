'use strict';
/* global document */
(function() {
  const playBtn = document.querySelector('.btn-video');
  const bgVideo = document.querySelector('video');

  const playState = (evt) => {
    evt.preventDefault();
    if (playBtn.classList.contains('play')) {
      bgVideo.play();
    } else {
      bgVideo.pause();
    }
    playBtn.classList.toggle('pause');
    playBtn.classList.toggle('play');
  };
  playBtn.addEventListener('click', playState);
})();
