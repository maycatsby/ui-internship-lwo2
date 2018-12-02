'use strict';
/* global document */
(function(doc) {
  const slidersArr = Array.from(doc.querySelectorAll('.slider'));

  const sliderControl = (slider) => {
    let currSlide = 1;
    const allSlides = Array.from(slider.querySelectorAll('.slide-quote'));
    const slidesLen = allSlides.length;
    slider.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.classList.contains('btn-slide')) {
        const btnOfSlide = e.target;
        if (btnOfSlide.classList.contains('next') && currSlide < slidesLen - 1) {
          allSlides[currSlide].classList.remove('current');
          allSlides[currSlide].classList.add('prev');
          currSlide++;
          allSlides[currSlide].classList.remove('next');
          allSlides[currSlide].classList.add('current');
        } else if (btnOfSlide.classList.contains('prev') && currSlide > 0) {
          allSlides[currSlide].classList.remove('current');
          allSlides[currSlide].classList.add('next');
          currSlide--;
          allSlides[currSlide].classList.remove('prev');
          allSlides[currSlide].classList.add('current');
        }
      }
    });
  };

  slidersArr.forEach((slider) => {
    sliderControl(slider);
  });
})(document);
