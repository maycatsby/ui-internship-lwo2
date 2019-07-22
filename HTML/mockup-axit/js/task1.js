import {elements} from './elements.js';
import {pattern} from './pattern.js';

const inputNameArr1 = [
  elements.formTrialForm.elements.name,
  elements.formTrialForm.elements.email,
  elements.formTrialForm.elements.password,
];

const inputNameArr2 = [
  elements.formContactForm.elements.name,
  elements.formContactForm.elements.email,
  elements.formContactForm.elements.subject,
  elements.formContactForm.elements.message,
];

const patternArr1 = [pattern.name, pattern.email, pattern.password];

const patternArr2 = [
  pattern.name,
  pattern.email,
  pattern.name,
  pattern.message,
];

const validator = (input, pattern) => {
  let inputValue = input.value;
  let isValid = pattern.test(inputValue);

  input.classList.remove('input--invalid');

  if (!isValid) {
    input.classList.add('input--invalid');
  }

  return isValid;
};

const submitVerification = (inputArr, patternArr, form, sent) => {
  let validationFactor = 0;

  for (let i = 0; i < inputArr.length; i++) {
    let validValue = validator(inputArr[i], patternArr[i]);

    if (validValue) {
      validationFactor++;
    }
  }

  if (validationFactor === inputArr.length) {
    form.classList.add('u-hidden');
    sent.classList.add('u-show');
  }
};

const formTrialListener = () => {
  elements.formTrialForm.addEventListener('submit', (event) => {
    submitVerification(
        inputNameArr1,
        patternArr1,
        elements.formTrialForm,
        elements.sentTrialForm
    );
    event.preventDefault();
  });
};

const formContactListener = () => {
  elements.formContactForm.addEventListener('submit', (event) => {
    submitVerification(
        inputNameArr2,
        patternArr2,
        elements.formContactForm,
        elements.sentContactForm
    );
    event.preventDefault();
  });
};

formTrialListener();
formContactListener();
