export const elementsLoaded = new Promise((res) => {
  document.addEventListener('DOMContentLoaded', () => {
    const elements = {
      formTrialForm: document.querySelector('.form-trial'),
      formContactForm: document.querySelector('.form-contact'),
      sentTrialForm: document.querySelector('.form-trial--submitted'),
      sentContactForm: document.querySelector('.form-contact--submitted'),
      tabs: document.querySelectorAll('.tab'),
      tabTitle: document.querySelector('.section-tabs__heading'),
      tabParagraph: document.querySelector('.section-tabs__paragraph'),
    };
    res(elements);
  });
});
