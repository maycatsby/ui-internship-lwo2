import {elementsLoaded} from './elements.js';

export const addTabsEffects = () => {
  elementsLoaded.then((data) => {
    const {tabsContainer, tabsContent, tabs} = data;
    let activeTabIndex = 0;

    tabsContainer.addEventListener('click', (e) => {
      let selectedIndex = e.target.dataset.index;

      tabs[activeTabIndex].classList.remove('tab--selected');
      tabs[selectedIndex].classList.add('tab--selected');

      tabsContent[activeTabIndex].classList.remove(
          'u-show',
          'u-show--animated'
      );
      tabsContent[selectedIndex].classList.add('u-show', 'u-show--animated');
      activeTabIndex = selectedIndex;
    });
  });
};
