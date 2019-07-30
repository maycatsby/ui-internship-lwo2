export const promiseElements = new Promise((res) => {
  document.addEventListener('DOMContentLoaded', () => {
    const elements = {
      portfolioContainer: document.querySelector(
          '.section-portfolio__container'
      ),
      popup: document.querySelector('.popup'),
      popupImage: document.querySelector('.popup__image'),
    };
    res(elements);
  });
});
