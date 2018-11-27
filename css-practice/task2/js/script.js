'use strict';
/* global document */

(function() {
  // 1. Responsive menu section
  const menuBtn = document.getElementById('menu-btn');
  const navMenu = document.getElementById('menu');

  const toggleMenu = (e) => {
    e.preventDefault();
    navMenu.classList.toggle('show');
  };

  menuBtn.addEventListener('click', toggleMenu);
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27 && navMenu.classList.contains('show')) {
      toggleMenu(e);
    }
  });

  // 2. Tabs with transition section
  const featureTabs = document.querySelector('.feature__tabs');
  const tabsButtons = [...featureTabs.querySelectorAll('button')];
  const featureContent = document.querySelector('.feature__content');
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
})();
