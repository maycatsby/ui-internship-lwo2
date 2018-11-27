const trialSubmitForm = document.getElementById('free-trial-form');
const trialSubmitButton = document.querySelector('.free-trial-btn');
const patterns = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  name: /^[a-zA-Z]+$/,
  password: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+-]).{6,20}/,
};

trialSubmitForm.addEventListener('keyup', validate, true);
trialSubmitForm.addEventListener('focus', validate, true);
trialSubmitForm.addEventListener('keyup', validateForm.bind(null, 'free-trial-form'), true);
trialSubmitButton.classList.add('disabled');

function validateForm(id, e) {
  const inputArr = Array.from(document.getElementById(id).children);
  console.log(inputArr);
  for (let i = 0; i < inputArr.length - 1; i++) {
    console.log(inputArr[i].classList.contains('success'));
    if (!inputArr[i].classList.contains('success')) {
      e.preventDefault();
      trialSubmitButton.classList.remove('enabled');
      trialSubmitButton.classList.add('disabled');
      return;
    }
  }
  trialSubmitButton.classList.add('enabled');
}

function validate(e) {
  const pattern = patterns[e.target.getAttribute('data-form')];
  if (e.target.classList.contains('free-trial-btn')) return;
  if (e.target.id === 'textarea-message') {
    if (e.target.value) {
      e.target.classList.remove('error');
      e.target.classList.add('success');
    } else {
      e.target.classList.remove('success');
      e.target.classList.add('error');
    }
    return;
  }
  if (!e.target.value) {
    e.target.classList.remove('success');
    e.target.classList.add('error');
    return false;
  }
  if (pattern.test(e.target.value)) {
    e.target.classList.remove('error');
    e.target.classList.add('success');
  } else {
    e.target.classList.remove('success');
    e.target.classList.add('error');
  }
}
