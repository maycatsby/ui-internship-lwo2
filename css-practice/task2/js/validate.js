// validation.js
'use strict';
/* global document, alert */
// input invalid messages
const isEmptyMsg = 'Please fill out this field!';
const notNameMsg = 'All lowercase letters & minlength 3';
const notEmailMsg = 'Write correct email adress';
const notPassMsg = 'Password didn\'t match';
// 1. check if input is valid
const checkField = (e) => {
  const input = e.target || e;
  const value = input.value;
  let isValid;
  if (!value) {
    input.setAttribute('isvalid', false);
    return;
  }
  if (input.hasAttribute('data-pattern')) {
    const pattern = new RegExp(input.getAttribute('data-pattern'));
    isValid = pattern.test(value);
  } else if (input.hasAttribute('maxlength')) {
    isValid = value.length <= parseInt(input.getAttribute('maxlength'), 10);
  }
  input.setAttribute('isvalid', isValid);
};
// 2. check which message to show user
const messageToDisplay = (array) => {
  return array.forEach((input) => {
    if (input.tagName !== 'TEXTAREA') {
      const validityTip = input.parentNode.lastElementChild;
      if (!input.value) {
        validityTip.textContent = isEmptyMsg;
      } else if (input.getAttribute('isvalid') === 'false') {
        let message = '';
        switch (input.name) {
          case 'name':
            message = notNameMsg;
            break;
          case 'email':
            message = notEmailMsg;
            break;
          case 'password':
            message = notPassMsg;
        }
        validityTip.innerText = message;
      } else {
        return;
      }
      showTipOnce(validityTip, input);
    }
  });
};
// 3. submit form only if all fields are valid
const submitHandle = (e) => {
  e.preventDefault();
  const inputsArr = filterFields(e.target);
  inputsArr.forEach((el) => {
    if (!el.hasAttribute('isvalid')) {
      checkField(el);
    }
  });
  const preSubmit = inputsArr.every((input) => {
    return input.getAttribute('isvalid') === 'true';
  });
  if (!preSubmit) {
    messageToDisplay(inputsArr);
    return;
  }
  alert('Your data was submitted');
};
// 4. filter form for inputs & textarea
const filterFields = (form) => {
  return Array.from(form.elements).filter((el) => {
    return (
      el.type === 'text' ||
      el.type === 'password' ||
      el.type === 'email' ||
      el.tagName === 'TEXTAREA'
    );
  });
};
// 5. show message till user starts to type
const showTipOnce = (smallTip, input) => {
  smallTip.style.display = 'block';
  const removeTip = () => {
    smallTip.textContent = '';
    smallTip.style = '';
    input.removeEventListener('input', removeTip);
  };
  input.addEventListener('input', removeTip);
};

(function() {
  // event Listeners
  const formsArr = Array.from(document.forms);
  formsArr.forEach((el) => {
    el.addEventListener('blur', checkField, true);
    el.addEventListener('submit', submitHandle);
  });
})();
