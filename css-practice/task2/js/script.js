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
  signupName.value = 'Andriy Zhukevych';
  signupEmail.value = 'hipnos.az@gmail.com';
  console.log(document.forms.signup);


  let menuShow = false; // navMenu State
  const toggleMenu = () => {
    if (!menuShow) {
      navMenu.classList.add('show');
    } else {
      navMenu.classList.remove('show');
    }
    menuShow = !menuShow;
  };

  menuBtn.addEventListener('click', toggleMenu);
  // formSignup.addEventListener('blur', () => {
  //   console.log(document.activeElement);
  // })

})(document);
