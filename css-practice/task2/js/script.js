'use strict';
/* eslint-disable */
(function(doc) {
  // 1. Responsive menu section
  const menuBtn = doc.getElementById('menu-btn');
  const navMenu = doc.getElementById('menu');
  let menuShown = false; // navMenu State

  const toggleMenu = (e) => {
    e.preventDefault();
    if (!menuShown) {
      navMenu.classList.add('show');
    } else {
      navMenu.classList.remove('show');
    }
    menuShown = !menuShown;
  };

  menuBtn.addEventListener('click', toggleMenu);
  doc.addEventListener('keydown', (e) => {
    if (e.keyCode === 27 && menuShown) toggleMenu(e);
  });

  // 2. Forms validations section
  // form & input
  const formSignup = doc.getElementById('signup');
  const signupName = formSignup.querySelector('[type="text"]');
  const signupEmail = formSignup.querySelector('[type="email"]');
  const signupPass = formSignup.querySelector('[type="password"]');
  // input validity messages
  const isEmptyMsg = 'Please fill out this field!';
  const notNameMsg = 'Username should only contain lowercase letters. e.g. john';
  const notEmailMsg = 'Write correct email adress';
  const notPassMsg =
    'Please include at least 1 uppercase character, 1 lowercase character, and 1 number. Length 6-20';

  // event handlers
  const checkField = (evt) => {
    const input = evt.target || evt;
    const value = input.value;
    if (!value) {
      input.setAttribute('isvalid', false);
      // const validityTip = input.parentNode.lastElementChild;
      // validityTip.textContent = isEmptyMsg;
      // validityTip.style = 'display:block';
      return;
    }
    if (!input.hasAttribute('data-pattern')) return;
    const pattern = new RegExp(input.getAttribute('data-pattern'));
    if (!pattern) return;
    const isValid = pattern.test(value);
    input.setAttribute('isvalid', isValid);
  };

  const submitHandle = (evt) => {
    evt.preventDefault();
    const inputsArr = [signupName, signupEmail, signupPass];
    inputsArr.forEach((el) => {
      if (!el.hasAttribute('isvalid')) checkField(el);
    });
    const preSubmit = inputsArr.every((input) => {
      return (input.getAttribute('isvalid') === 'true');
    });
    if (!preSubmit) {
      console.log('Check your values');
      return;
    }
    alert('Your data was submitted');
  };

  formSignup.addEventListener('blur', checkField, true);
  formSignup.addEventListener('submit', submitHandle);
})(document);
