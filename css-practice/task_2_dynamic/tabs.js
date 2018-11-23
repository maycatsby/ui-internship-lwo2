/* eslint-disable*/
function tabulation(event, currentTab) {
  let description = document.getElementsByClassName('tab-description');
  for (let i = 0; i < description.length; i++) {
    description[i].style.display = 'none';
  }
  let pointer = document.getElementsByClassName('tab');
  for (let i = 0; i < pointer.length; i++) {
    pointer[i].className = pointer[i].className.replace(' active', '');
  }
  document.getElementById(currentTab).style.display = 'block';
  event.currentTarget.className += ' active';
}
document.getElementById('default-open').click();
