import {promiseElements} from './elements.js';

export const showPopup = () => {
  promiseElements.then((data) => {
    const {popup, portfolioContainer, popupImage} = data;
    popup.addEventListener('click', () => {
      popup.classList.remove('u-show');
    });
    portfolioContainer.addEventListener('click', (e) => {
      let clickTarget = e.target.closest('.picture').dataset.image;
      popup.classList.add('u-show');
      popupImage.src = `img/layer-${clickTarget}@3x.png`;
    });
  });
};
