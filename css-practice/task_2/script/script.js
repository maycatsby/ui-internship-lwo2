const featureContentChange = () => {
  const elem1 = document.querySelector('#features-1');
  const elem2 = document.querySelector('#features-2');
  const elem3 = document.querySelector('#features-3');
  const btn1 = document.querySelector('#but-1');
  const btn2 = document.querySelector('#but-2');
  const btn3 = document.querySelector('#but-3');
  const elemArr = [elem1, elem2, elem3];
  const butArr = [btn1, btn2, btn3];
  const hideElems = () => {
    elemArr.forEach(element => {
      element.style.display = 'none';
    });
  }
  const removeClassActive = () => {
    butArr.forEach(element => {
      element.classList.remove('tab-active');
    });
  }
  const showElems = (elem) => {
    elem.style.display = 'block';
    elem.style.animation = 'opacityBorn 3s';

  }
  btn1.onclick = () => {
    hideElems();
    showElems(elem1);
    removeClassActive();
    btn1.classList.add('tab-active');
  }
  btn2.onclick = () => {
    hideElems();
    showElems(elem2);
    removeClassActive();
    btn2.classList.add('tab-active');
  }
  btn3.onclick = () => {
    hideElems();
    showElems(elem3);
    removeClassActive();
    btn3.classList.add('tab-active');
  }
}
featureContentChange();

const formValidator = () => {
  const nameInput = document.querySelector('#nameInput');
  const emailInput = document.querySelector('#emailInput');
  const passwordInput = document.querySelector('#passwordInput');
  const nameInputBottom = document.querySelector('#nameInputBottom');
  const emailInputBottom = document.querySelector('#emailInputBottom');
  const subjectInputBottom = document.querySelector('#subjectInputBottom');
  const regexName = /^[a-zA-Z ]{2,25}$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexPassword = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+-]).{6,16}/;
  const regexSubject = /.{0,30}$/;
  const checkInput = (reg, element) => {
    if (reg.test(element.value)) {
      element.classList.add('input-green');
      element.classList.remove('input-red');
    } else {
      element.classList.add('input-red');
      element.classList.remove('input-green');
    }
  }
  nameInput.onblur = () => {
    checkInput(regexName, nameInput);
  }
  emailInput.onblur = () => {
    checkInput(regexEmail, emailInput);
  }
  passwordInput.onblur = () => {
    checkInput(regexPassword, passwordInput);
  }
  subjectInputBottom.onblur = () => {
    checkInput(regexSubject, subjectInputBottom );
  }
  nameInputBottom.onblur = () => {
    checkInput(regexName, nameInputBottom);
  }
  emailInputBottom.onblur = () => {
    checkInput(regexEmail, emailInputBottom);
  }
}

formValidator();