export const promiseElements = new Promise((res) => {
  document.addEventListener('DOMContentLoaded', () => {
    const elements = {
      optionsPart: document.querySelector('.section-range__options'),
      optionTop: document.querySelectorAll('.option-item__top'),
      paragraph: document.querySelectorAll('.option-item__paragraph'),
      arrow: document.querySelectorAll('.option-item__btn'),
      picture: document.querySelectorAll('.section-range__image'),
      portfolioContainer: document.querySelector(
          '.section-portfolio__container'
      ),
      popup: document.querySelector('.popup'),
      popupImage: document.querySelector('.popup__image'),
    };
    res(elements);
  });
});
