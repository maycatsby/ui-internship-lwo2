import {elementsLoaded} from './elements.js';

export const playPauseButton = () => {
  elementsLoaded.then((data) => {
    const elements = data;
    elements.buttonPlay.addEventListener('click', () => {
      elements.buttonPlay.classList.toggle('u-play-active');
      if (elements.videoFile.paused) {
        elements.videoFile.play();
      } else {
        elements.videoFile.pause();
      }
    });
  });
};
