const trialSubmitForm = document.getElementById('free-trial-form');
const trialSubmitButton = document.querySelector('.free-trial-btn');
const patterns = {
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  name: /^[a-zA-Z]+$/,
  password: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+-]).{6,20}/,
};

function validateForm(id, e) {
  const inputArr = Array.from(document.getElementById(id).children);

  for (let i = 0; i < inputArr.length - 1; i++) {
    if (!inputArr[i].classList.contains('success')) {
      e.preventDefault();
      trialSubmitButton.classList.replace('enabled', 'disabled');
      return;
    }
  }
  trialSubmitButton.classList.replace('disabled', 'enabled');
}

function validate(e) {
  const pattern = patterns[e.target.getAttribute('data-form')];
  const target = e.target;

  if (target.classList.contains('free-trial-btn')) return;

  if (pattern.test(target.value)) {
    target.classList.remove('error');
    target.classList.add('success');
  } else {
    target.classList.remove('success');
    target.classList.add('error');
  }
}

const formValidationModule = {
  init: () => {
    trialSubmitForm.addEventListener('keyup', validate, true);
    trialSubmitForm.addEventListener('blur', validate, true);
    trialSubmitForm.addEventListener('keyup', validateForm.bind(null, 'free-trial-form'), true);
    trialSubmitButton.classList.add('disabled');
  },
};

export default formValidationModule;
