const featureContentChange = () => {
  const featuresBlock1 = document.querySelector('#features-1');
  const featuresBlock2 = document.querySelector('#features-2');
  const featuresBlock3 = document.querySelector('#features-3');
  const tabButton1 = document.querySelector('#tab-Button1');
  const tabButton2 = document.querySelector('#tab-Button2');
  const tabButton3 = document.querySelector('#tab-Button3');
  const featureBlockArr = [featuresBlock1, featuresBlock2, featuresBlock3];
  const tabButtonArr = [tabButton1, tabButton2, tabButton3];
  const hideElems = () => {
    featureBlockArr.forEach(element => {
      element.style.display = 'none';
    });
  }
  const removeClassActive = () => {
    tabButtonArr.forEach(element => {
      element.classList.remove('tab-active');
    });
  }
  const showElems = (elem) => {
    elem.style.display = 'block';
    elem.style.animation = 'opacityBorn 3s';
  }
  tabButton1.onclick = () => {
    hideElems();
    showElems(featuresBlock1);
    removeClassActive();
    tabButton1.classList.add('tab-active');
  }
  tabButton2.onclick = () => {
    hideElems();
    showElems(featuresBlock2);
    removeClassActive();
    tabButton2.classList.add('tab-active');
  }
  tabButton3.onclick = () => {
    hideElems();
    showElems(featuresBlock3);
    removeClassActive();
    tabButton3.classList.add('tab-active');
  }
}
featureContentChange();

const formValidator = () => {
  const checkInput = (reg, element) => {
    if (reg.test(element.value)) {
      element.classList.add('input-green');
      element.classList.remove('input-red');
      return true
    } else {
      element.classList.add('input-red');
      element.classList.remove('input-green');
      return false
    }
  }
  const forms = [...document.forms];
  forms.forEach((el) => {
    el.onclick = (e) => {
      e.target.onblur = function () {
        const currentPattern = new RegExp(this.getAttribute('pattern'));
        if (checkInput(currentPattern, this) === false) {
          const hintArr = [...document.getElementsByClassName('hint')];
          const elHint = this.getAttribute('data-text');
          hintArr.forEach(el => {
            el.innerHTML = elHint;
          })
        }
      }
      e.target.onfocus = function () {
        const hintArr = [...document.getElementsByClassName('hint')];
        const elHint = this.getAttribute('data-text');
        hintArr.forEach(el => {
          el.innerHTML = elHint;
        })
      }
    }
  })
}
formValidator();