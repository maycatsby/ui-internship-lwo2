const formLogin = document.getElementById('form-login');
const submitInput = document.getElementById('but');
const inputs = [...formLogin.querySelectorAll('input')];
const formValidator = () => {
  const passed = inputs.every((el) => el.checkValidity());
  if (passed) {
    submitInput.classList.remove('disable');
    submitInput.disabled = false;
  } else {
    submitInput.classList.add('disable');
    submitInput.disabled = true;
  }
}
formLogin.addEventListener('input', formValidator, true);
