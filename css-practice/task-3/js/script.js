const conts = document.querySelectorAll('.services-info-title');
const eks = document.querySelectorAll('.services-info-text');

conts.forEach((el) => {
  el.addEventListener('click', toggleShow);
});

function toggleShow(e) {
  if (e.currentTarget.nextElementSibling.classList.contains('height-0')) {
    eks.forEach((el) => {
      el.classList.remove('height-auto');
      el.classList.add('height-0');
    });
  } else {
    e.currentTarget.nextElementSibling.classList.remove('height-auto');
    e.currentTarget.nextElementSibling.classList.add('height-0');
    return;
  }
  e.currentTarget.nextElementSibling.classList.toggle('height-0');
  e.currentTarget.nextElementSibling.classList.toggle('height-auto');
}

const rightArrows = document.querySelectorAll('.fa-angle-right');
const leftArrows = document.querySelectorAll('.fa-angle-left');
const carouContainer = document.querySelector('.carousel-container');

leftArrows.forEach((el) => {
  el.addEventListener('click', carouselPrev);
})
rightArrows.forEach((el) => {
  el.addEventListener('click', carouselNext);
})

function carouselNext(e) {
  let active = e.currentTarget.parentElement.querySelector('.active-carou-item');

  if(!active.nextElementSibling) {
    active.classList.remove('active-carou-item');
    active.classList.add('next-carou-item');
    active.previousElementSibling.classList.remove('prev-carou-item');
    active.previousElementSibling.classList.add('next-carou-item');
    active.previousElementSibling.previousElementSibling.classList.remove('prev-carou-item');
    active.previousElementSibling.previousElementSibling.classList.add('active-carou-item');
    return;
  };
  
  active.classList.remove('active-carou-item');
  active.classList.add('prev-carou-item');
  active.nextElementSibling.classList.remove('next-carou-item');
  active.nextElementSibling.classList.add('active-carou-item');
}

function carouselPrev(e) {
  let active = e.currentTarget.parentElement.querySelector('.active-carou-item');

  if(!active.previousElementSibling) {
    active.classList.remove('active-carou-item');
    active.classList.add('prev-carou-item');
    active.nextElementSibling.classList.remove('next-carou-item');
    active.nextElementSibling.classList.add('prev-carou-item');
    active.nextElementSibling.nextElementSibling.classList.remove('next-carou-item');
    active.nextElementSibling.nextElementSibling.classList.add('active-carou-item');
    return;
  };

  active.classList.remove('active-carou-item');
  active.classList.add('next-carou-item');
  active.previousElementSibling.classList.remove('prev-carou-item');
  active.previousElementSibling.classList.add('active-carou-item');
}
