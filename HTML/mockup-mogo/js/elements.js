export const promiseElements = new Promise((res) => {
  document.addEventListener('DOMContentLoaded', () => {
    const elements = {
      portfolioContainer: document.querySelector(
          '.section-portfolio__container'
      ),
      popup: document.querySelector('.popup'),
      popupImage: document.querySelector('.popup__image'),
      optionsPart: document.querySelector('.section-range__options'),
      optionTop: document.querySelectorAll('.option-item__top'),
      paragraph: document.querySelectorAll('.option-item__paragraph'),
      arrow: document.querySelectorAll('.option-item__btn'),
      picture: document.querySelectorAll('.section-range__image'),
      opinionsPartFirst: document.querySelectorAll('.opinion--1'),
      opinionsPartSecond: document.querySelectorAll('.opinion--2'),
      buttonLeft: document.querySelectorAll('.btn--left'),
      buttonRight: document.querySelectorAll('.btn--right'),
    };
    res(elements);
  });
});
