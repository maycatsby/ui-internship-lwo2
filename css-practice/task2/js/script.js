'use strict';
/* global document, alert */

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
  const formSignup = doc.getElementById('signup');
  const signupArr = [...formSignup.elements].filter((el) => {
    return el.type === 'text' || el.type === 'password' || el.type === 'email';
  });
  const formMessage = doc.getElementById('message');
  const messageArr = [...formMessage.elements].filter((el) => {
    return (
      el.type === 'text' || el.type === 'email' || el.tagName === 'TEXTAREA'
    );
  });
  // input validity messages
  const isEmptyMsg = 'Please fill out this field!';
  const notNameMsg = 'All lowercase letters & minlength 3';
  const notEmailMsg = 'Write correct email adress';
  const notPassMsg = 'Password didn\'t match';
  // event handlers
  const checkField = (evt) => {
    const input = evt.target || evt;
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

  const submitHandle = (array, evt) => {
    evt.preventDefault();
    array.forEach((el) => {
      if (!el.hasAttribute('isvalid')) checkField(el);
    });
    const preSubmit = array.every((input) => {
      return input.getAttribute('isvalid') === 'true';
    });
    if (!preSubmit) {
      displayMsg(array);
      return;
    }
    alert('Your data was submitted');
  };

  const displayMsg = (array) => {
    return array.forEach((input) => {
      if (input.tagName !== 'TEXTAREA') {
        const validityTip = input.parentNode.lastElementChild;
        if (!input.value) {
          validityTip.textContent = isEmptyMsg;
        } else if (input.getAttribute('isvalid') === 'false') {
          if (input.name === 'name') validityTip.textContent = notNameMsg;
          if (input.name === 'email') validityTip.textContent = notEmailMsg;
          if (input.name === 'password') validityTip.textContent = notPassMsg;
        } else {
          return;
        }
        validityTip.style.display = 'block';
        const removeTip = () => {
          validityTip.textContent = '';
          validityTip.style = '';
          input.removeEventListener('input', removeTip);
        };
        input.addEventListener('input', removeTip);
      }
    });
  };
  // event listeners
  formSignup.addEventListener('blur', checkField, true);
  formMessage.addEventListener('blur', checkField, true);
  formSignup.addEventListener('submit', submitHandle.bind(null, signupArr));
  formMessage.addEventListener('submit', submitHandle.bind(null, messageArr));

  // 3. Tabs with transition section
  const featureTabs = doc.querySelector('.feature__tabs');
  const tabsButtons = [...featureTabs.querySelectorAll('button')];
  const featureContent = doc.querySelector('.feature__content');
  const contentSigns = [
    ...featureContent.querySelectorAll('.feature__content-sign'),
  ];
  let indexLB = 0;

  const switchTabs = (evt) => {
    const tabBtn = evt.target;
    if (!tabBtn.classList.contains('active')) {
      contentSigns[indexLB].classList.remove('show-sign');
      tabsButtons[indexLB].classList.remove('active');
      indexLB = tabsButtons.indexOf(tabBtn);
      tabBtn.classList.add('active');
      contentSigns[indexLB].classList.add('show-sign');
    }
    return;
  };

  featureTabs.addEventListener('click', switchTabs);
})(document);
