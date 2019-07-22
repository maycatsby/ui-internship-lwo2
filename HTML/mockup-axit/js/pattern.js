export const pattern = {
  name: /^[a-zA-Z]+$/,
  email: /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{1,63}$/,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
  message: /.{1,250}/,
};
