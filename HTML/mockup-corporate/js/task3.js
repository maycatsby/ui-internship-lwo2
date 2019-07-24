import {elementsLoaded} from './elements.js';
import {patterns} from './patterns.js';

export const formValidator = () => {
  elementsLoaded.then((data) => {
    const elements = data;

    const inputNameArr = [
      elements.nameInput,
      elements.emailInput,
      elements.passwordInput,
    ];

    const patternArr = [patterns.name, patterns.email, patterns.password];

    const validator = (input, pattern) => {
      let inputValue = input.value;
      let isValid = pattern.test(inputValue);

      input.classList.remove('input--invalid');

      if (!isValid) {
        input.classList.add('input--invalid');
      }

      return isValid;
    };

    const validArr = [false, false, false];

    elements.form.addEventListener('input', (e) => {
      let index = e.target.dataset.index;
      let validValue = validator(inputNameArr[index], patternArr[index]);
      validArr[index] = validValue;

      elements.btn.classList.remove('btn--disabled');

      if (validArr.includes(false)) {
        elements.btn.classList.add('btn--disabled');
      }
    });

    elements.form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!validArr.includes(false)) {
        elements.form.classList.add('u-hidden');
        elements.sentForm.classList.add('u-show');
      }
    });
  });
};
