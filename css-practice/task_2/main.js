/* eslint-disable */
window.onload = function() {
  const video = document.getElementById('my-video');
  const btnVideo = document.getElementById('play');
  if (btnVideo) {
    btnVideo.addEventListener('click', makePlay, false);
  }

  function makePlay() {
    if (video.paused) {
      video.play();
      btnVideo.classList.remove('paused');
      btnVideo.classList.add('play');
    } else {
      video.pause();
      btnVideo.classList.remove('play');
      btnVideo.classList.add('paused');
    }
  }

  const loginFormInpunts = document.forms['main-form'].getElementsByTagName('input');
  for (let i = 0; i < loginFormInpunts.length; i++) {
    loginFormInpunts[i].addEventListener('keyup', validate, false);
  }

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
}