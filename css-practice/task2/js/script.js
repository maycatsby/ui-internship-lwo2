'use strict';
/* eslint-disable */
(function (doc) {
  const menuBtn = doc.getElementById('menu-btn');
  const navMenu = doc.getElementById('menu');
  // signup form selectors
  const formSignup = doc.getElementById('signup');
  const signupName = formSignup.querySelector('[type="text"]');
  const signupEmail = formSignup.querySelector('[type="email"]');
  const signupPass = formSignup.querySelector('[type="password"]');
  // test values
  signupName.value = 'andy';
  signupEmail.value = 'xxx.az@gmail.com';
  signupPass.value = 'xyZ12';
  console.log(document.forms.signup);

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
  const submitHandle = (evt) => {
    evt.preventDefault();
    alert('You submitted the form');
  }
  // Event listeners
  menuBtn.addEventListener('click', toggleMenu);
  formSignup.addEventListener('submit', submitHandle);
})(document);
