function validate(id, pattern) {
  const node = document.getElementById(id);

  if (pattern.test(node.value)) {
    node.classList.remove('error');
    node.classList.add('success');
    return;
  }

  node.classList.remove('success');
  node.classList.add('error');
}

function validateForm(id) {
  const inputArr = Array.from(document.getElementById(id).children);
  for (let i = 0; i < inputArr.length; i++) {
    if (Array.from(inputArr[i].classList).indexOf('error') !== -1) {
      alert('please enter valid values');
      return;
    }
  }
}

function tabSwitch(id) {
  const featureParas = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.',
    'Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.',
    'Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.'
  ];
  const featureTabs = document.getElementById('feature-tabs').children;
  const node = document.getElementById(id);

  if (node.classList.contains('tab-active')) {
    return;
  } else {
    for (let i = 0; i < featureTabs.length; i++) {
      featureTabs[i].classList.remove('tab-active');
    }
    node.classList.add('tab-active');
    document.getElementById('features-para').innerText = featureParas[node.id.slice(-1)];
    var myopacity = 0;
    paraFade();

    function paraFade() {
      if (myopacity < 1) {
        myopacity += .03;
        setTimeout(function () {
          paraFade()
        }, 16);
      }
      document.getElementById('feature-content').style.opacity = myopacity;
    }
  }
}
