/* eslint-disable*/
const nameReg = /[a-zA-Z]+$/;
const mailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
const subjReg = /.{1,30}/;
const textAreaReg = /.{1,250}/;
const userName = document.forms['headerForm']['user_name'];
const userNameFooter = document.forms['footerForm']['user_name'];
const userEmail = document.forms['headerForm']['user_mail'];
const userEmailFooter = document.forms['footerForm']['user_mail'];
const userPassword = document.forms['headerForm']['user_password'];
const messageSubject = document.forms['footerForm']['subject'];
const theMessage = document.forms['footerForm']['message'];

userName.onblur = function() {
  if (nameReg.test(userName.value)) {
    userName.style.outline = '2px solid green';
  } else {
    userName.style.outline = '2px solid red';
  }
};

userNameFooter.onblur = function() {
  if (nameReg.test(userNameFooter.value)) {
    userNameFooter.style.outline = '2px solid green';
  } else {
    userNameFooter.style.outline = '2px solid red';
  }
};

userEmail.onblur = function() {
  if (mailReg.test(userEmail.value)) {
    userEmail.style.outline = '2px solid green';
  } else {
    userEmail.style.outline = '2px solid red';
  }
};

userEmailFooter.onblur = function() {
  if (mailReg.test(userEmailFooter.value)) {
    userEmailFooter.style.outline = '2px solid green';
  } else {
    userEmailFooter.style.outline = '2px solid red';
  }
};

userPassword.onblur = function() {
  if (passReg.test(userPassword.value)) {
    userPassword.style.outline = '2px solid green';
  } else {
    userPassword.style.outline = '2px solid red';
  }
};

messageSubject.onblur = function() {
  if (subjReg.test(messageSubject.value)) {
    messageSubject.style.outline = '2px solid green';
  } else {
    messageSubject.style.outline = '2px solid red';
  }
};

theMessage.onblur = function() {
  if (textAreaReg.test(theMessage.value)) {
    theMessage.style.outline = '2px solid green';
  } else {
    theMessage.style.outline = '2px solid red';
  }
};
