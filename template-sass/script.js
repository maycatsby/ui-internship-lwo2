/* eslint-disable */
(() => {
  const PATTERNS = {
    username: /[A-Za-z]{2,20}/g,
    email: /^([,a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/g,
    subject: /[\s\S]{0,30}$/g
  };

  const VALID_CLASSNAME = 'valid';
  const ERROR_CLASSNAME = 'error';

  initForms(['login-form', 'contact-form']);

  function initForms(forms) {
    forms.forEach(formId => handleFormValidation(formId));
  }

  function handleFormValidation(formName) {
    const form = document.forms[formName];

    form.addEventListener('keyup', e => validateInput(e.target), true);
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
})();

function validTextarea() {
  const val = document.getElementById("separate").value;
  const pattern = /[\s\S]{1,250}$/g;
  if (val.match(pattern)) {
    document.getElementById("separate").classList.add('valid');
    document.getElementById("separate").classList.remove('error');
  } else {
    document.getElementById("separate").classList.add('error');
    document.getElementById("separate").classList.remove('valid');
  };
}

function tabsChange(id) {
  const tabs = document.getElementsByClassName('tabs-text');
  const selectedTab = document.getElementById(`tabs-text-${id}`);
  for (let i = 1; i <= tabs.length; i++) {
    const tab = document.getElementById(`tabs-text-${i}`);
    const tabButton = document.getElementById(i)
    if(selectedTab === tab) {
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

