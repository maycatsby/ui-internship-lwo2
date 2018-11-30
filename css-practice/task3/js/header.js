'use strict';
/* global document window requestAnimationFrame */
(function(doc) {
  const header = doc.querySelector('.header');
  const headerNav = header.querySelector('.header__nav');
  const headerMenu = header.querySelector('.header__menu');
  const burgerBtn = header.querySelector('#menu-btn');
  const menuLinks = Array.from(headerMenu.querySelectorAll('.nav-item'));
  const sectionsObj = {
    0: '#banner',
    1: '#about',
    2: '#service',
    3: '#work',
    4: '#blog',
    5: '#footer',
  };
  // console.log(burgerBtn);
  // console.log(sectionsObj);
  // console.log([header, headerNav, headerMenu]);
  // console.log(document.documentElement.scrollHeight);

  // Fading menu after pageYOffset;
  const menuFade = () => {
    headerMenu.classList.remove('open');
    const offset = window.pageYOffset;
    if (offset >= 948) {
      headerNav.classList.add('fixed', 'animated', 'fadeInDown');
    } else {
      headerNav.classList.remove('fixed', 'animated', 'fadeInDown');
    }
  };

  /* !This isn't my code. Used only for smooth-scrolling effect! */
  const smoothScroll = (index, duration) => {
    const target = doc.querySelector(sectionsObj[index]);
    const targetPos = target.getBoundingClientRect().top;
    const startPos = window.pageYOffset;
    const distance = targetPos - startPos;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) {
        startTime = currentTime;
      }
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPos, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    /* http://www.gizma.com/easing/ */
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
    requestAnimationFrame(animation);
    // console.log(target);
    // console.log(distance);
  };

  // Change active link & start animation scroll effect;
  const menuClickHandler = (e) => {
    e.preventDefault();
    const link = e.target;
    const i = menuLinks.indexOf(link.parentNode);
    if (i !== -1) {
      menuLinks.forEach((li) => {
        li.classList.remove('active');
      });
      menuLinks[i].classList.add('active');
      smoothScroll(i, 3000);
    }
  };

  window.addEventListener('scroll', menuFade);
  headerMenu.addEventListener('click', menuClickHandler);
  burgerBtn.addEventListener('click', function(e) {
    e.preventDefault();
    headerMenu.classList.toggle('open');
  });
})(document);
