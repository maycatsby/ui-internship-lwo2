/*eslint-disable*/
function tabulation(event, currentTab) {
  let description;

  description = Array.from(document.getElementsByClassName('tab-description'));

  description.forEach((element) => {
    element.style.display = 'none';
  });
  document.getElementById(currentTab).style.display = 'block';
  event.currentTarget.classList.toggle('active');
}
document.getElementById('default-open').click();
