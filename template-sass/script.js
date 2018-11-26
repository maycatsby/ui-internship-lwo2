/* eslint-disable */
(() => {
  const PATTERNS = {
    username: /[A-Za-z]{2,20}/g,
    email: /^([,a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/g,
    subject: /[\s\S]{0,30}$/g,
    message: /[\s\S]{1,250}$/g
  };

  const formsOnPage = document.querySelectorAll('form');
  const VALID_CLASSNAME = 'valid';
  const ERROR_CLASSNAME = 'error';

  initForms(['login-form', 'contact-form']);

  function initForms(forms) {
    forms.forEach(formId => handleFormValidation(formId));
    formsOnPage.forEach((el) => {
      el.addEventListener('submit', submit);
    })
  }

  function handleFormValidation(formName) {
    const form = document.forms[formName];
    form.addEventListener('keyup', e => validateInput(e.target), true);
    form.addEventListener('keyup', e => resetForm(e.target), true);
  }

  function validateInput(input) {
    const { value, name } = input;

    const pattern = PATTERNS[name];

    const isValid = isValidValue(value, pattern);

    const addClass = isValid ? VALID_CLASSNAME : ERROR_CLASSNAME;
    const removeClass = !isValid ? VALID_CLASSNAME : ERROR_CLASSNAME;

    input.classList.add(addClass);
    input.classList.remove(removeClass);

  }

  function isValidValue(val, pattern) {
    return !!val.match(pattern);
  }

  function resetForm(input) {
    if (input.value === '') {
      input.classList.remove('valid');
      input.classList.remove('error');
    }
  }

  function submit(e) {
    const inputs = [...this.elements];
    if (inputs.some(el => (el.value === '' && el['type'] !== 'submit') || isValidValue(el.value, PATTERNS[el.name]) === false)) {
      e.preventDefault();
      inputs.forEach((el) => {
        if (el.value === '' && el['type'] !== 'submit') {
          el.classList.add('error');
        }
      })
    }
  }
})();

function tabsChange(id) {
  const tabs = document.getElementsByClassName('tabs-text');
  const selectedTab = document.getElementById(`tabs-text-${id}`);
  for (let i = 1; i <= tabs.length; i++) {
    const tab = document.getElementById(`tabs-text-${i}`);
    const tabButton = document.getElementById(i)
    if (selectedTab === tab) {
      tab.classList.add('show');
      tab.classList.remove('hidden');
      tabButton.classList.add('active');
    } else {
      tab.classList.add('hidden');
      tab.classList.remove('show');
      tabButton.classList.remove('active');
    }
  }
}

