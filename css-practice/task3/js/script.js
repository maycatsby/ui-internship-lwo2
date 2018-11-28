'use strict';
/* global document */
(function() {
  // window.addEventListener('scroll', () => {
  //   console.log(window.pageYOffset);
  // });
  const accordion = document.getElementById('accordion');
  const panelsArr = Array.from(accordion.children);

  const switchHandler = (e) => {
    e.preventDefault();
    const actionBtn = e.target;
    const iconChev = actionBtn.children[1];
    const activePanel = actionBtn.parentNode.parentNode.parentNode;
    const openState = isOpenPanel(activePanel);
    closeAllPanels();
    togglePanel(activePanel, openState, iconChev);
  };

  const isOpenPanel = (panel) => {
    return panel.classList.contains('open') ? true : false;
  };

  const closeAllPanels = () => {
    panelsArr.forEach((el) => {
      el.classList.remove('open');
      el.classList.add('close');
      el.children[1].classList.remove('in');
    });
  };

  const togglePanel = (panel, state, icon) => {
    icon.classList.toggle('fa-chevron-up');
    icon.classList.toggle('fa-chevron-down');
    const content = panel.children[1];
    if (!state) {
      panel.classList.remove('close');
      panel.classList.add('open');
      content.classList.add('in');
    } else {
      panel.classList.add('close');
      panel.classList.remove('open');
      content.classList.remove('in');
    }
  };

  panelsArr.forEach((el, index) => {
    el.addEventListener('click', switchHandler);
  });
})();
