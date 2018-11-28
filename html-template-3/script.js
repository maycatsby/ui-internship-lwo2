/* eslint-disable */
(() => {
  const head = document.getElementById('head');
  const navigation = document.querySelector('.top-navigation');

  document.addEventListener('scroll', addBackground); 
  navigation.addEventListener('click', e => addBorder(e.target.id));

  function addBackground() {
    if(document.documentElement.scrollTop > 0) {
      head.classList.add('add-background');
    } else {
      head.classList.remove('add-background');
    }
  }

  const menuItem = document.getElementsByClassName('menu-item');

  function addBorder(id) {
    const selectedLink = document.getElementById(`${id}`);
    for (let i = 1; i <= menuItem.length; i++) {
      const link = document.getElementById(`${i}`);
      if (selectedLink === link) {
        link.classList.add('add-border');
      } else {
        link.classList.remove('add-border');
      }
    }
  }

})();


