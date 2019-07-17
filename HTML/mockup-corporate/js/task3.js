import {elements} from './elements.js';
import {patterns} from './patterns.js';

const inputNameArr = [
  elements.nameInput,
  elements.emailInput,
  elements.passwordInput,
];

const patternArr = [patterns.name, patterns.email, patterns.password];

const validator = (input, pattern) => {
  let inputValue = input.value;
  let validation = pattern.test(inputValue);

  input.classList.remove('input--invalid');

  if (!validation) {
    input.classList.add('input--invalid');
    return false;
  } else {
    return true;
  }
};

const validArr = [false, false, false];

inputNameArr.forEach((el, ind) => {
  el.addEventListener('input', () => {
    let validValue = validator(inputNameArr[ind], patternArr[ind]);
    validArr[ind] = validValue;

    elements.btn.classList.remove('btn--disabled');

    if (validArr.includes(false)) {
      elements.btn.classList.add('btn--disabled');
    }
  });
});

elements.form.addEventListener('submit', (e) => {
  e.preventDefault();
  elements.form.classList.add('u-hidden');
  elements.sentForm.classList.add('u-show');
});
