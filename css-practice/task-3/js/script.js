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

const rightArrow = document.querySelector('.fa-angle-right');
const carouContainer = document.querySelector('.carousel-container');

rightArrow.addEventListener('click', carouselNext);

function carouselNext() {
  console.log(document.querySelector('.active-carou-item'));
  document.querySelector('.active-carou-item').classList.add('prev-carou-item');
  document.querySelector('.active-carou-item').classList.remove('active-carou-item');
  document.querySelector('.next-carou-item').classList.add('active-carou-item');
  document.querySelector('.next-carou-item').classList.remove('next-carou-item');
}

