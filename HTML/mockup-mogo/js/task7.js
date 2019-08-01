import {promiseElements} from './elements.js';

export const initSlider = () => {
  promiseElements.then((data) => {
    const {
      opinionsPartFirst,
      opinionsPartSecond,
      buttonLeft,
      buttonRight,
    } = data;
    let curIndexFirst = 0;
    let curIndexSecond = 0;

    buttonLeft.forEach((el, ind) => {
      el.addEventListener('click', () => {
        if (ind === 0) {
          curIndexFirst = opinionChange(
              opinionsPartFirst,
              curIndexFirst,
              'Left',
              'opinionsPartFirst'
          );
        } else {
          curIndexSecond = opinionChange(
              opinionsPartSecond,
              curIndexSecond,
              'Left',
              'opinionsPartSecond'
          );
        }
      });
    });

    buttonRight.forEach((el, ind) => {
      el.addEventListener('click', () => {
        if (ind === 0) {
          curIndexFirst = opinionChange(
              opinionsPartFirst,
              curIndexFirst,
              'Right'
          );
        } else {
          curIndexSecond = opinionChange(
              opinionsPartSecond,
              curIndexSecond,
              'Right'
          );
        }
      });
    });
  });
};

const opinionChange = (opinions, curIndex, direction) => {
  opinions[curIndex].classList.remove('opinion--active');

  if (direction === 'Left') {
    curIndex = curIndex === 0 ? opinions.length - 1 : curIndex - 1;
  } else {
    curIndex = curIndex === opinions.length - 1 ? 0 : curIndex + 1;
  }

  opinions[curIndex].style.animationName = `move${direction}`;
  opinions[curIndex].classList.add('opinion--active');
  return curIndex;
};
