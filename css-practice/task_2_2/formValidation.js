/* global document */

/* Form Validation */
const formValidation = (() => {
  const form = document.querySelector('form');
  const button = document.querySelector('button');
  const hint = document.getElementById('hint');
  const inputs = Array.from(form.querySelectorAll('input'));

  const formValidationHandler = function(pattern, e) {
    const target = e.target;
    const elHint = target.getAttribute('data-text');
    const isValid = inputs.every((el) => {
      el.classList.contains('blur_success');
    });

    const elContainClass = target.classList.contains('blur_error');
    if (elContainClass) {
      hint.innerHTML = elHint;
    } else {
      hint.innerHTML = '';
    }

    valid(pattern, target);
    if (isValid) {
      button.classList.remove('btn_disable');
    } else {
      button.classList.add('btn_disable');
    }
  };

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

  return {
    init: () => {
      inputs.forEach((input) => {
        const currPattern = new RegExp(input.getAttribute('pattern'));
        input.addEventListener('keyup',
            formValidationHandler.bind(null, currPattern));
      });
    },
  };
})();

formValidation.init();
