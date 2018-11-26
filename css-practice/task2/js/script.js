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
  // signup form inputs
  const formSignup = doc.getElementById('signup');
  const signupArr = [...formSignup.elements].filter((el) => {
    return (
      el.type === 'text' ||
      el.type === 'password' ||
      el.type === 'email'
    );
  });
  // message form inputs
  const formMessage = doc.getElementById('message');
  const messageArr = [...formMessage.elements].filter((el) => {
    return (
      el.type === 'text' ||
      el.type === 'password' ||
      el.type === 'email' ||
      el.tagName === 'TEXTAREA'
    );
  });
  // input validity messages
  const isEmptyMsg = 'Please fill out this field!';
  const notNameMsg = 'All lowercase letters & minlength 3';
  const notEmailMsg = 'Write correct email adress';
  const notPassMsg = "Password didn't match";
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

  formSignup.addEventListener('blur', checkField, true);
  formMessage.addEventListener('blur', checkField, true);
  formSignup.addEventListener('submit', submitHandle.bind(null, signupArr));
  formMessage.addEventListener('submit', submitHandle.bind(null, messageArr));

  // 3. tabs with transition
  const featureTabs = doc.querySelector('.feature__tabs');
  const tabsButtons = [...featureTabs.querySelectorAll('button')];
  const featureContent = doc.querySelector('.feature__content');
  // console.log(featureContent.children[0]);
  // console.log(featureContent.children[1]);
  const content = {
    'tab1': {
      0: 'heading test1',
      1: 'paragraph test1'
    },
    'tab2': {
      0: 'heading test2',
      1: 'paragraph test2'
    },
    'tab3': {
      0: 'heading test3',
      1: 'paragraph test 3'
    }
  }

  const switchTabs = (evt) => {
    const tabBtn = evt.target;
    const index = tabsButtons.indexOf(tabBtn);
    if (!tabBtn.classList.contains('active')) {
      tabsButtons.forEach((el) => {
        el.classList.remove('active');
      });
      tabBtn.classList.add('active');
      showTab(index);
    }
    return;
  }

  const showTab = (index) => {
    const tabsArray = ['tab1', 'tab2', 'tab3'];
    featureContent.children[0].innerText = content[tabsArray[index]][0];
    featureContent.children[1].innerText = content[tabsArray[index]][1];
  };

  featureTabs.addEventListener('click', switchTabs, true);
})(document);
