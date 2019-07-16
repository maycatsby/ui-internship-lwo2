/* eslint-disable no-undef */
import {elements} from './elements.js';

const namePattern = /^[a-zA-Z]+$/;
const emailPattern = /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{1,63}$/;
// eslint-disable-next-line max-len
const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;

const inputNameArr = [
  elements.nameInput,
  elements.emailInput,
  elements.passwordInput,
];

const patternArr = [namePattern, emailPattern, passwordPattern];

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

inputNameArr.forEach((el, ind) => {
  el.addEventListener('input', () => {
    let validValue = validator(inputNameArr[ind], patternArr[ind]);
    elements.btn.classList.remove('btn--disabled');

    if (!validValue) {
      elements.btn.classList.add('btn--disabled');
    }
  });
});

elements.form.addEventListener('submit', (e) => {
  e.preventDefault();
  // let emptyInputsAmount = 0;
  // for (let i = 0; i < inputNameArr.length; i++) {
  //   if (inputNameArr[i].value === '') {
  //     emptyInputsAmount++;
  //   }
  // }

  elements.form.classList.add('u-hidden');
  elements.sentForm.classList.add('u-show');
  // if (emptyInputsAmount) {
  //   e.preventDefault();
  // }
});
