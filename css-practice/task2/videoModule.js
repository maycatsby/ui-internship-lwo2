/* global document:true */
/* eslint-disable no-invalid-this */

const videoState = document.querySelector('.player');

function pauseVideoFunc() {
  const video = document.querySelector('video');
  const pauseVideo = document.querySelector('.fa-pause-circle');
  const playVideo = document.querySelector('.fa-play-circle');

  video.paused ? video.play() : video.pause();
  pauseVideo.classList.toggle('none');
  playVideo.classList.toggle('none');
}

const videoModuleApi = {
  init: () => {
    videoState.addEventListener('click', pauseVideoFunc);
  },
};

export default videoModuleApi;
