const trialSubmitForm = document.getElementById('free-trial-form');
const sendMessageFrom = document.getElementById('send-message-form');
const trialSubmitButton = document.getElementById('free-trial-btn');
const featureTabs = document.getElementById('feature-tabs');

featureTabs.addEventListener('click', tabSwitch);
trialSubmitForm.addEventListener('submit', validateForm.bind(null, 'free-trial-fs'), true);
trialSubmitForm.addEventListener('keyup', validate, true);
sendMessageFrom.addEventListener('keyup', validate, true);
sendMessageFrom.addEventListener('submit', validateForm.bind(null, 'send-message'), true);
trialSubmitForm.addEventListener('focus', validate, true);
sendMessageFrom.addEventListener('focus', validate, true);


const patterns = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  name: /^[a-zA-Z]+$/,
  password: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+-]).{6,20}/,
};


function validateForm(id, e) {
  const inputArr = Array.from(document.getElementById(id).children);

  for (let i = 0; i < inputArr.length; i++) {
    if (!inputArr[i].classList.contains('success')) {
      e.preventDefault();
      return false;
    }
  }
}

function validate(e) {
  const pattern = patterns[e.target.getAttribute('data-form')];

  if (e.target.classList.contains('submit-btn')) return;

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

function tabSwitch(e) {
  const featureParas = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.',
    'Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.',
    'Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.',
  ];
  const featureTabsArr = featureTabs.children;
  const tabContent = document.getElementById('feature-content');
  if (!e.target.classList.contains('features--btn')) {
    return;
  }

  if (e.target.classList.contains('tab-active')) {
    return;
  } else {
    for (let i = 0; i < featureTabsArr.length; i++) {
      featureTabsArr[i].classList.remove('tab-active');
    }

    e.target.classList.add('tab-active');
    tabContent.classList.remove('opacity-1');
    tabContent.classList.add('opacity-0');
    setTimeout(function () {
      document.getElementById('features-para').innerText = featureParas[e.target.id.slice(-1)];
      tabContent.classList.remove('opacity-0');
      tabContent.classList.add('opacity-1');
    }, 300);
  }
}

