const form = document.forms[0];
const formInput = form.querySelectorAll('input');
const inputs = Array.from(formInput);
const tryNowBtn = document.getElementById('form-button');

function validatePattern(event) {
  const element = event.target;

  if (!element.validity) return;
  if (element.validity.patternMismatch || element.value === '' || element.value == null) {
    element.classList.remove('valid');
    element.classList.add('invalid');
  } else {
    element.classList.remove('invalid');
    element.classList.add('valid');
  }
}

function notDisabled() {
  const validInputs = inputs.every((el) => el.classList.contains('valid'));

  if (validInputs) {
    tryNowBtn.classList.remove('disabled');
  } else {
    tryNowBtn.classList.add('disabled');
  }
}

const formAPI = {
  init: () => {
    form.addEventListener('keyup', validatePattern, true);
    form.addEventListener('keyup', notDisabled, true);
  },
};

export default formAPI;
