/* eslint-disable no-undef */
import {elements} from './elements.js';

const namePattern = /^[a-zA-Z]+$/;
const emailPattern = /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{1,63}$/;
// eslint-disable-next-line max-len
const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
const messagePattern = /.{1,250}/;

const inputNameArr = [
  elements.nameTrialForm,
  elements.emailTrialForm,
  elements.passwordTrialForm,
  elements.nameContactForm,
  elements.emailContactForm,
  elements.messageContactForm,
  elements.subjectContactForm,
];

const formSentArr = [elements.sentTrialForm, elements.sentContactForm];

const patternArr = [
  namePattern,
  emailPattern,
  passwordPattern,
  namePattern,
  emailPattern,
  namePattern,
  messagePattern,
];

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

[elements.formTrialForm, elements.formContactForm].forEach((el, ind) => {
  el.addEventListener('submit', (event) => {
    const validValueArr = [];
    let loopStart = ind === 0 ? 0 : 3;
    let loopEnd = ind === 0 ? 3 : inputNameArr.length;

    for (let i = loopStart; i < loopEnd; i++) {
      let validValue = validator(inputNameArr[i], patternArr[i]);

      if (!validValue) {
        validValueArr.push(validValue);
      }
    }

    if (!validValueArr.length) {
      el.classList.add('u-hidden');
      formSentArr[ind].classList.add('u-show');
    }

    event.preventDefault();
  });
});
