import {elementsLoaded} from './elements.js';
import * as content from './content.js';

export const addingTabsEffects = () => {
  elementsLoaded.then((data) => {
    const elements = data;

    const changeContent = (title, content) => {
      elements.tabTitle.textContent = title;
      elements.tabParagraph.textContent = content;
    };

    const changeTabColor = (e) => {
      elements.tabs.forEach((el) => {
        el.classList.remove('tab--selected');
      });
      e.target.classList.add('tab--selected');
    };

    const addingClickListener = () => {
      elements.tabs.forEach((el, index) => {
        el.addEventListener('click', (e) => {
          changeTabColor(e);
          changeContent(content.title[index], content.paragraph[index]);
        });
      });
    };

    addingClickListener();
  });
};
