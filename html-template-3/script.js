/* eslint-disable */
(() => {
  const head = document.getElementById('head');

  document.addEventListener('scroll', addBackground);

  function addBackground() {
    if (document.documentElement.scrollTop > 0) {
      head.classList.add('add-background');
    } else {
      head.classList.remove('add-background');
    }
  }

  const navigation = document.querySelector('.top-navigation');
  const menuItem = document.getElementsByClassName('menu-item');

  navigation.addEventListener('click', e => addBorder(e.target.id));

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

  const accItem = document.getElementsByClassName('drop-item');
  const accHD = document.getElementsByClassName('drop-item-header');
  for (let i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
  }

  function toggleItem() {
    const itemClass = this.parentNode.className;
    for (let i = 0; i < accItem.length; i++) {
      accItem[i].className = 'drop-item close';
    }
    if (itemClass === 'drop-item close') {
      this.parentNode.className = 'drop-item open';
    }
  }

})();


