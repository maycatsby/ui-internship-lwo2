const ppbutton = document.getElementById('vidbutton');
ppbutton.addEventListener('click', playPause);
const myVideo = document.getElementById('myvid');
function playPause() {
  if (myVideo.paused) {
    myVideo.play();
    ppbutton.classList.add('play');
    ppbutton.classList.remove('pause');
  } else {
    myVideo.pause();
    ppbutton.classList.remove('play');
    ppbutton.classList.add('pause');
  }
}
