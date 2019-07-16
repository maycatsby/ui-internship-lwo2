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
  const emptyInputsArr = [];
  for (i = 0; i < inputNameArr.length; i++) {
    if (inputNameArr[i].value === '') {
      emptyInputsArr.push('is empty');
      console.log(emptyInputsArr);
    }
  }

  if (emptyInputsArr.length) {
    e.preventDefault();
  }
});
// el.addEventListener('submit', (event) => {
//   const validValueArr = [];

//   for (let i = loopStart; i < loopEnd; i++) {
//     let validValue = validator(inputNameArr[i], patternArr[i]);

//     if (!validValue) {
//       validValueArr.push(validValue);
//     }
//   }

//   if (!validValueArr.length) {
//     el.classList.add('u-hidden');
//     formSentArr[ind].classList.add('u-show');
//   }

//   event.preventDefault();
// });
