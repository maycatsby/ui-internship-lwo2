/* global document*/
const conts = document.querySelectorAll('.services-info-title');
const eks = document.querySelectorAll('.services-info-text');

conts.forEach((el) => {
  el.addEventListener('click', toggleShow);
});

function toggleShow(e) {

  const textClassList = e.currentTarget.nextElementSibling.classList;
  conts.forEach((el) => {
    if (el !== e.currentTarget) {
      el.querySelector('i').classList.remove('rotate-180');
    }
  });

  e.currentTarget.querySelector('i').classList.toggle('rotate-180');

  if (e.currentTarget.nextElementSibling.classList.contains('height-0')) {
    eks.forEach((el) => {
      el.classList.remove('height-auto');
      el.classList.add('height-0');
    });
  } else {
    textClassList.remove('height-auto');
    textClassList.add('height-0');
    return;
  }
  textClassList.toggle('height-0');
  textClassList.toggle('height-auto');
}

// carousel

const rightArrows = document.querySelectorAll('.fa-angle-right');
const leftArrows = document.querySelectorAll('.fa-angle-left');

leftArrows.forEach((el) => {
  el.addEventListener('click', carouselPrev);
});
rightArrows.forEach((el) => {
  el.addEventListener('click', carouselNext);
});

function carouselNext(e) {
  let active = e.currentTarget.parentElement.querySelector('.active-carou-item');

  if (!active.nextElementSibling) {
    active.classList.remove('active-carou-item');
    active.classList.add('next-carou-item');
    active.previousElementSibling.classList.remove('prev-carou-item');
    active.previousElementSibling.classList.add('next-carou-item');
    active.previousElementSibling.previousElementSibling.classList.remove('prev-carou-item');
    active.previousElementSibling.previousElementSibling.classList.add('active-carou-item');
    return;
  }

  active.classList.remove('active-carou-item');
  active.classList.add('prev-carou-item');
  active.nextElementSibling.classList.remove('next-carou-item');
  active.nextElementSibling.classList.add('active-carou-item');
}

function carouselPrev(e) {
  let active = e.currentTarget.parentElement.querySelector('.active-carou-item');

  if (!active.previousElementSibling) {
    active.classList.remove('active-carou-item');
    active.classList.add('prev-carou-item');
    active.nextElementSibling.classList.remove('next-carou-item');
    active.nextElementSibling.classList.add('prev-carou-item');
    active.nextElementSibling.nextElementSibling.classList.remove('next-carou-item');
    active.nextElementSibling.nextElementSibling.classList.add('active-carou-item');
    return;
  }

  active.classList.remove('active-carou-item');
  active.classList.add('next-carou-item');
  active.previousElementSibling.classList.remove('prev-carou-item');
  active.previousElementSibling.classList.add('active-carou-item');
}

// modals

const gallery = document.querySelector('.gallery-container');

gallery.addEventListener('click', showPopup);

function showPopup(e) {
  if (!e.target.nextElementSibling) return;
  const modal = e.target.nextElementSibling.nextElementSibling;
  const galleryImage = e.target.nextElementSibling;
  const modalImg = modal.querySelector('.modal-content');

  modal.classList.remove('none');
  modal.classList.add('block');
  modalImg.src = galleryImage.src;
  modal.addEventListener('click', closePopup);
}


function closePopup(e) {
  document.querySelector('.block').classList.replace('block', 'none');
}
