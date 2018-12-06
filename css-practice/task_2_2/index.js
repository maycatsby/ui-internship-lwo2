/* global document, window, innerWidth */

/* Code By Taras */
const support = document.querySelector('.support h3');
const about = document.querySelector('.about_us h3');
const dropdownSupp = document.querySelector('.support ul');
const dropdownAbout = document.querySelector('.about_us ul');
const dNone = 'disp-none';
const width768 = 768;
const hideEl = (el) => {
  el.classList.add(dNone);
};
const showEl = (el) => {
  el.classList.remove(dNone);
};
if (innerWidth <= width768) {
  hideEl(dropdownAbout);
  hideEl(dropdownSupp);
}

window.onresize = () => {
  if (innerWidth <= width768) {
    hideEl(dropdownAbout);
    hideEl(dropdownSupp);
  } else {
    showEl(dropdownAbout);
    showEl(dropdownSupp);
  }
};

support.onclick = () => {
  dropdownSupp.classList.contains(dNone)
    ? showEl(dropdownSupp)
    : hideEl(dropdownSupp);
};

support.onmouseleave = () => {
  if (innerWidth <= width768) {
    hideEl(dropdownSupp);
  }
};
about.onclick = () => {
  dropdownAbout.classList.contains(dNone)
  ? showEl(dropdownAbout)
  : hideEl(dropdownAbout);
};

about.onmouseleave = (e) => {
  if (innerWidth <= width768) {
    hideEl(dropdownAbout);
  }
};


/* Video */
const video = document.querySelector('video');
const playVideo = document.querySelector('.video-player');
const continueVideo = document.querySelector('.fa-play-circle');
const pauseVideo = document.querySelector('.fa-pause-circle');
playVideo.onclick = () => {
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


/* Form Validation */
(function() {
  const form = Array.from(document.querySelectorAll('form'));
  const button = document.querySelector('button');
  const hint = document.getElementById('hint');
  form.forEach((el) => {
    const inputs = Array.from(el.querySelectorAll('input'));
    inputs.forEach(function(el) {
      const currPattern = new RegExp(el.getAttribute('pattern'));
      el.onkeyup = function() {
        const elHint = this.getAttribute('data-text');
        const isValid = inputs.every((el) => el.classList.contains('blur_success'));
        const elContainClass = el.classList.contains('blur_error');
        if (elContainClass) {
          hint.innerHTML = elHint;
        } else {
          hint.innerHTML = '';
        }
        valid(currPattern, el);
        if (isValid) {
          button.classList.remove('btn_disable');
        } else {
          button.classList.add('btn_disable');
        }
      };
    });
  });
  const valid = (reg, el) => {
    const inputClassList = el.classList;
    const validRegEx = reg.test(el.value);
    if (validRegEx) {
      inputClassList.add('blur_success');
      inputClassList.remove('blur_error');
      inputClassList.add('valid');
      inputClassList.remove('invalid');
    } else {
      inputClassList.add('blur_error');
      inputClassList.remove('blur_success');
      inputClassList.add('invalid');
      inputClassList.remove('valid');
    }
  };
})();