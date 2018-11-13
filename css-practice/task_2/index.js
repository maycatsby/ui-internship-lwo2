/* eslint-disable */
const menu = document.querySelector('.menu-btn');
const hiddenMenu = document.querySelector('.burger-menu');
menu.onclick = () => {
  hiddenMenu.classList.contains('d-none') ? hiddenMenu.classList.remove('d-none') : hiddenMenu.classList.add('d-none');
};
window.onclick = (e) => {
  if (e.target !== menu) {
    hiddenMenu.classList.add('d-none');
  }
};
