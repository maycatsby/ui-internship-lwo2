/* global document */


const dNone = 'disp-none';
const hideEl = (el) => {
  el.classList.add(dNone);
};
const showEl = (el) => {
  el.classList.remove(dNone);
};
const video = document.querySelector('video');
const playVideo = document.querySelector('.video-player');
const continueVideo = document.querySelector('.fa-play-circle');
const pauseVideo = document.querySelector('.fa-pause-circle');

const playVideoHandler = () => {
  if (video.paused) {
    hideEl(continueVideo);
    showEl(pauseVideo);
    video.play();
  } else {
    showEl(continueVideo);
    hideEl(pauseVideo);
    video.pause();
  }
};

const videoAPI = {
  init: () => {
    playVideo.addEventListener('click', playVideoHandler);
  },
};


export default videoAPI;
