export const elementsLoaded = new Promise((res) => {
  document.addEventListener('DOMContentLoaded', () => {
    const elements = {
      formTrialForm: document.querySelector('.form-trial'),
      formContactForm: document.querySelector('.form-contact'),
      sentTrialForm: document.querySelector('.form-trial--submitted'),
      sentContactForm: document.querySelector('.form-contact--submitted'),
      tabsContainer: document.querySelector('.section-tabs__tabs'),
      tabsContent: document.querySelectorAll('.section-tabs__content'),
      tabs: document.querySelectorAll('.tab'),
    };
    res(elements);
  });
});
