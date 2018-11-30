/* eslint-disable */
(function scroll() {
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
})();

(function accordion() {
  const accItem = document.getElementsByClassName('drop-item');
  const accHD = document.getElementsByClassName('drop-item-header');
  const arrow = document.querySelectorAll('.arrow');

  for (let i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem);
  }

  function toggleItem() {
    const itemClass = this.parentNode.className;
    const thisArrow = this.querySelector('i');
    for (let i = 0; i < accItem.length; i++) {
      accItem[i].className = 'drop-item close';
      arrow[i].className = 'fas fa-angle-down'
    }
    if (itemClass === 'drop-item close') {
      this.parentNode.className = 'drop-item open';
      thisArrow.className = 'fas fa-angle-up';
    }
  }
})();

(function popUpClick() {
  const popupContainer = document.getElementById('popup');
  const images = document.querySelector('.grid-gallery');
  const popupImg = document.getElementById('img');

  images.addEventListener('click', e => clicked(e.target));
  popupContainer.addEventListener('click', function(e) {
    // if(e.target.tagName !== 'IMG') {
      popupContainer.classList.remove('block');
      popupContainer.classList.add('none');
    // }
  })

  function clicked(target) {

    if(target === event.target) {
      popupContainer.classList.toggle('block');
      popupImg.src = target.src;
    }
  }

  // document.addEventListener('click', hide);
  //     function hide() {
  //       popupContainer.toggle('none');
  //     }
})();


