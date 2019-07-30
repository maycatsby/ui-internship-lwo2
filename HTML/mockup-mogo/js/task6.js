import {promiseElements} from './elements.js';

export function displayAccordion() {
  promiseElements.then((elements) => {
    elements.optionsPart.addEventListener('click', (e) => {
      let targetClosestOption = e.target.closest('.option-item__top');

      if (!targetClosestOption) {
        return false;
      }

      let targetIndex = targetClosestOption.dataset.index;

      elements.optionTop.forEach((el, index) => {
        if (index == targetIndex) {
          elements.paragraph[index].classList.add('u-show');
          elements.arrow[index].src = 'img/arrow-up@3x.png';
          elements.picture[index].classList.add('u-show');
        } else {
          elements.paragraph[index].classList.remove('u-show');
          elements.arrow[index].src = 'img/arrow-down@3x.png';
          elements.picture[index].classList.remove('u-show');
        }
      });
    });
  });
}
