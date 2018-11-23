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
  event.preventDefault();
  const inputArr = Array.from(document.getElementById(id).children);
  for (let i = 0; i < inputArr.length; i++) {
    if (Array.from(inputArr[i].classList).indexOf('error') !== -1) {
      console.log(inputArr[i], inputArr[i].classList);
      alert('please enter valid shieeet');
      return;
    }
  }
}
