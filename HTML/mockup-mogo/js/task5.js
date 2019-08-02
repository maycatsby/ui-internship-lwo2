import {promiseElements} from './elements.js';
import {showActiveLink} from './showActiveLink.js';

export function initScroll() {
  promiseElements.then(({menu, navigation}) => {
    initStickMenu(navigation);
    showActiveLink();

    menu.addEventListener('click', (e) => {
      let clickTarget = e.target;
      if (!clickTarget.dataset.scroll) {
        return false;
      }
      e.preventDefault();
      let activeLink = clickTarget.dataset.scroll;
      let scrollAim =
        activeLink !== 'contact'
          ? document.getElementById(activeLink).offsetTop
          : document.body.clientHeight - window.innerHeight;
      if (scrollAim === window.scrollY) {
        return false;
      }
      window.scrollTo({
        top: scrollAim,
        left: 0,
        behavior: 'smooth',
      });
    });
  });
}

const initStickMenu = (menu) => {
  window.addEventListener('scroll', () => {
    if (window.scrollY) {
      menu.classList.add('header__top-navigation--onscroll');
    } else {
      menu.classList.remove('header__top-navigation--onscroll');
    }
  });
};
