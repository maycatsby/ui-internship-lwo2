export const elementsLoaded = new Promise((res) => {
  document.addEventListener('DOMContentLoaded', () => {
    const elements = {
      nameInput: document.querySelector('.form__input-name'),
      emailInput: document.querySelector('.form__input-email'),
      passwordInput: document.querySelector('.form__input-password'),
      btn: document.querySelector('.form__btn'),
      form: document.querySelector('.form'),
      sentForm: document.querySelector('.form--submitted'),
      buttonPlay: document.querySelector('.header__play-icon'),
      videoFile: document.querySelector('.header__video'),
    };
    res(elements);
  });
});
