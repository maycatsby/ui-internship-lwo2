/* eslint-disable */
(() => {
  const PATTERNS = {
    name: /[A-Za-z]{2,20}/g,
    email: /^([,a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/g
  };

  const FORMS_ON_PAGE = document.querySelectorAll('form');
  const VALID_CLASSNAME = 'valid';
  const ERROR_CLASSNAME = 'error';

  handleFormValidation(['contact-form']);
  FORMS_ON_PAGE.forEach((el) => {
    el.addEventListener('submit', submit);
  });

  function handleFormValidation(formName) {
    const form = document.forms[formName];
    form.addEventListener('keyup', (e) => validateInput(e.target), true);
    form.addEventListener('keyup', (e) => resetForm(e.target), true);
  }

  function validateInput(input) {
    const { value, name } = input;

    const pattern = PATTERNS[name];

    const isValid = isValidValue(value, pattern);

    const addClass = isValid ? VALID_CLASSNAME : ERROR_CLASSNAME;
    const removeClass = !isValid ? VALID_CLASSNAME : ERROR_CLASSNAME;

    input.classList.add(addClass);
    input.classList.remove(removeClass);
    disable();
  }

  function isValidValue(val, pattern) {
    return !!val.match(pattern);
  }

  function resetForm(input) {
    if (input.value === '') {
      input.classList.remove('valid');
      input.classList.remove('error');
    }
  }

  function submit(e) {
    const inputs = [...this.elements];
    if (inputs.some((el) => (el.value === '' && el['type'] !== 'submit') || isValidValue(el.value, PATTERNS[el.name]) === false)) {
      e.preventDefault();
      inputs.forEach((el) => {
        if (el.value === '' && el['type'] !== 'submit') {
          el.classList.add('error');
        }
      });
    }
  }
  
  const buttonSub = document.getElementById('submit-button');

  function disable() {
    const inputs = [...document.forms['contact-form'].querySelectorAll('input')];
    if (inputs.some(el => el.classList.contains('error') || el.value === '')) {
      buttonSub.classList.add('disabled');
    } else {
      buttonSub.classList.remove('disabled');
    }
  }
  disable();
})();

(() => {
const videoState = document.querySelector('.player');
const pauseVideo = document.querySelector('.fa-pause-circle');
const playVideo = document.querySelector('.fa-play-circle');

videoState.addEventListener('click', pauseVideoFunc);

function pauseVideoFunc() {
  const video = document.querySelector('video');
  video.paused ? video.play() : video.pause();
  pauseVideo.classList.toggle('none');
  playVideo.classList.toggle('none');

}
})()
