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
  const formSignup = doc.getElementById('signup');
  const signupArr = [...formSignup.elements].filter((el) => {
    return el.type === 'text' || el.type === 'password' || el.type === 'email';
  });
  const formMessage = doc.getElementById('message');
  const messageArr = [...formMessage.elements].filter((el) => {
    return el.type === 'text' || el.type === 'email' || el.tagName === 'TEXTAREA';
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
  // event listeners
  formSignup.addEventListener('blur', checkField, true);
  formMessage.addEventListener('blur', checkField, true);
  formSignup.addEventListener('submit', submitHandle.bind(null, signupArr));
  formMessage.addEventListener('submit', submitHandle.bind(null, messageArr));

  // 3. Tabs with transition section
  const featureTabs = doc.querySelector('.feature__tabs');
  const tabsButtons = [...featureTabs.querySelectorAll('button')];
  const featureContent = doc.querySelector('.feature__content');
  const signs = {
    tab1: {
      0: `Aard sign`,
      1: `The Aard sign is a simple magical sign used by witchers.
          It is comprised of a telekinetic thrust that can stun,
          repel, knock down, or disarm opponents,
          as well as remove barriers and other objects.<br/>
          <a href="https://witcher.fandom.com/wiki/Aard_sign" target="_blank">Read more...</a>`.replace(/\n/g, ''),
    },
    tab2: {
      0: `Igni sign`,
      1: `The Igni sign is a simple magical sign used by witchers.
          It is comprised of a pyrokinetic burst that can repel and ignite opponents,
          as well as start fires.<br/>
          <a href="https://witcher.fandom.com/wiki/Igni_sign" target="_blank">Read more...</a>`.replace(/\n/g, ''),
    },
    tab3: {
      0: `Yrden sign`,
      1: `The Yrden Sign is a simple magical sign used by witchers.
          It forms a magical trap on the ground that triggers a limited number
          of times when traversed by a foe causing knock back, damage,
          and a chance of inflicting status ailments.<br/>
          <a href="https://witcher.fandom.com/wiki/Yrden_sign" target="_blank">Read more...</a>`.replace(/\n/g, ''),
    },
    tab4: {
      0: `Quen sign`,
      1: `The Quen sign is a simple magical sign used by witchers.
          When cast it forms a protective field around the casting witcher.<br/>
          <a href="https://witcher.fandom.com/wiki/Quen_sign" target="_blank">Read more...</a>`.replace(/\n/g, ''),
    },
    tab5: {
      0: `Axii sign`,
      1: `The Axii sign is a simple magical sign comprised of a hypnotic effect
          and is used by witchers. It can calm down people and creatures or be
          used to hex enemies, causing them to fight alongside the caster.
          The effect wears off over time or can be prematurely broken if they
          take damage from the caster.<br/>
          <a href="https://witcher.fandom.com/wiki/Axii_sign" target="_blank">Read more...</a>`.replace(/\n/g, ''),
    },
  };

  const switchTabs = (evt) => {
    const tabBtn = evt.target;
    if (!tabBtn.classList.contains('active')) {
      tabsButtons.forEach((el) => {
        el.classList.remove('active');
      });
      tabBtn.classList.add('active');
      showTab();
    }
    return;
  };

  const showTab = () => {
    const tabsArray = ['tab1', 'tab2', 'tab3', 'tab4', 'tab5'];
    const index = Math.floor(Math.random() * tabsArray.length);
    // opacity-transition animation
    featureContent.children[0].classList.remove('transition');
    featureContent.children[1].classList.remove('transition');
    setTimeout(() => {
      featureContent.children[0].classList.add('transition');
      featureContent.children[1].classList.add('transition');
    }, 10);
    // change content
    featureContent.children[0].innerHTML = signs[tabsArray[index]][0];
    featureContent.children[1].innerHTML = signs[tabsArray[index]][1];
  };

  featureTabs.addEventListener('click', switchTabs, true);
})(document);
