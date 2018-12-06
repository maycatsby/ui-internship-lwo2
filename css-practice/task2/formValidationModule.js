/* global document:true */
/* eslint-disable no-invalid-this */

const PATTERNS = {
  name: /[A-Za-z]{2,20}/g,
  /* eslint-disable-next-line */
  email: /^([,a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g,
  /* eslint-disable-next-line */
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/g,
};

const FORMS_ON_PAGE = document.querySelectorAll('form');
const VALID_CLASSNAME = 'valid';
const ERROR_CLASSNAME = 'error';

function validateInput(input) {
  const {value, name} = input;

  const pattern = PATTERNS[name];

  const isValid = isValidValue(value, pattern);

  const addClass = isValid ? VALID_CLASSNAME : ERROR_CLASSNAME;
  const removeClass = !isValid ? VALID_CLASSNAME : ERROR_CLASSNAME;

  input.classList.add(addClass);
  input.classList.remove(removeClass);
  disable();
  resetForm(input);
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

  const isEmptyOrSubmit = function(el) {
    return el.value === '' && el['type'] !== 'submit';
  };
  const isValid = function(el) {
    return isValidValue(el.value, PATTERNS[el.name]);
  };
  const isAnyEmptyOrTypeofSubmitOrInvalid = inputs
      .some(isEmptyOrSubmit || !isValid);

  if (isAnyEmptyOrTypeofSubmitOrInvalid) {
    e.preventDefault();
    inputs.forEach((el) => {
      if (isEmptyOrSubmit(el)) {
        el.classList.add('error');
      }
    });
  }
}

function disable() {
  const buttonSub = document.getElementById('submit-button');
  const inputs = [...document.forms['contact-form']
      .querySelectorAll('input')];
  const invalid = function(el) {
    return el.classList.contains('error') || el.value === '';
  };
  const isAnyInvalid = inputs.some(invalid);

  if (isAnyInvalid) {
    buttonSub.classList.add('disabled');
  } else {
    buttonSub.classList.remove('disabled');
  }
}
disable();

const formValidationModuleApi = {
  init: () => {
    handleFormValidation(['contact-form']);
    FORMS_ON_PAGE.forEach((el) => {
      el.addEventListener('submit', submit);
    });

    function handleFormValidation(formName) {
      const form = document.forms[formName];
      form.addEventListener('keyup', (e) => validateInput(e.target), true);
    }
  },
};

export default formValidationModuleApi;
