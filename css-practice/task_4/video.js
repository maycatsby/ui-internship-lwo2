const video = document.getElementsByClassName('main-video')[0];
const videoBtn = document.getElementsByClassName('play-mode')[0];


function pauseVideo() {
  video.pause();
  videoBtn.classList.add('play');
  videoBtn.classList.remove('pause');
}

function playVideo() {
  video.play();
  videoBtn.classList.remove('play');
  videoBtn.classList.add('pause');
}

function videoPlayer() {
  if (!video.paused) {
    pauseVideo();
  } else {
    playVideo();
  }
}

const videoAPI = {
  init: () => {
    videoBtn.addEventListener('click', videoPlayer);
  },
};

export default videoAPI;
