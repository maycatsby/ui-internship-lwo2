/* global  document, window */
window.onload = function() {
  const video = document.getElementById('my-video');
  const btnVideo = document.getElementById('play');
  if (btnVideo) {
    btnVideo.addEventListener('click', togglePlay, false);
  }

  function togglePlay() {
    video.paused ? playVideo() : pauseVideo();
  }

  function playVideo() {
    video.play();
    btnVideo.classList.remove('play');
    btnVideo.classList.add('paused');
  }

  function pauseVideo() {
    video.pause();
    btnVideo.classList.remove('paused');
    btnVideo.classList.add('play');
  }

  const loginFormInpunts = document.forms['main-form'].getElementsByTagName('input');
  document.forms['main-form'].addEventListener('keyup', validate);
  
  function validate(event) {
    if (!event.target.validity.valid || !event.target.value) {
      event.target.classList.add('invalid');
    } else {
      event.target.classList.remove('invalid');
      event.target.classList.add('valid');
    }
    checkItem();
  }

  function checkItem() {
    const sendBtn = document.getElementById('send-btn');
    const isValid = [...loginFormInpunts].every((el) => el.classList.contains('valid'));
    if (isValid) {
      sendBtn.classList.remove('disabled');
    }
  }
};
