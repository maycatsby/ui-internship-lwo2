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

function validateForm(event, id) {
  const inputArr = Array.from(document.getElementById(id).children);
  for (let i = 0; i < inputArr.length; i++) {
    if (Array.from(inputArr[i].classList).indexOf('error') !== -1) {
      alert('please enter valid values');
      return;
    }
  }
}
