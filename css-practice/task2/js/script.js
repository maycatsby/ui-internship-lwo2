'use strict';
/* eslint-disable */
(function(doc) {
  const menuBtn = doc.getElementById('menu-btn');
  const navMenu = doc.getElementById('menu');
  // signup form selectors
  const formSignup = doc.getElementById('signup');
  const signupName = formSignup.querySelector('[type="text"]');
  const signupEmail = formSignup.querySelector('[type="email"]');
  const signupPass = formSignup.querySelector('[type="password"]');
  const msgName =
    'Please use only lowercase latin letters and minlength of name 3';
  const msgEmail = 'Write correct email adress';
  const msgPass =
    'Please include at least 1 uppercase character, 1 lowercase character, and 1 number. Length 6-20';
  // test values
  signupName.value = 'andy';
  signupEmail.value = 'xxx.az@gmail.com';
  signupPass.value = 'xyZ12';
  // console.log(document.forms.signup);
  let menuShow = false; // navMenu State

  // Event handlers
  const toggleMenu = () => {
    if (!menuShow) {
      navMenu.classList.add('show');
    } else {
      navMenu.classList.remove('show');
    }
    menuShow = !menuShow;
  };

  const checkField = (evt) => {
    const element = evt.target || evt;
    const value = element.value;
    if (!value) {
      element.setAttribute('isvalid', false);
      return;
    }
    if (!element.hasAttribute('data-pattern')) return;
    const pattern = new RegExp(element.getAttribute('data-pattern'));
    if (!pattern) return;
    const isValid = pattern.test(value);
    element.setAttribute('isvalid', isValid);
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
      alert('Check your values');
      return;
    }
    alert('Your form submitted');
  };

  // Event listeners
  menuBtn.addEventListener('click', toggleMenu);
  formSignup.addEventListener('blur', checkField, true);
  formSignup.addEventListener('submit', submitHandle);
})(document);
