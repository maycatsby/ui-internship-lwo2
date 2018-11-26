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

myColorFunc = function(testRule, objectToTest) {
  if (testRule.test(objectToTest.value)) {
    objectToTest.style.outline = '2px solid green';
  } else {
    objectToTest.style.outline = '2px solid red';
  }  
};

userName.onblur = function() {
  myColorFunc(nameReg, userName);
};

userNameFooter.onblur = function() {
  myColorFunc(nameReg, userNameFooter);
};

userEmail.onblur = function() {
  myColorFunc(mailReg, userEmail);
};

userEmailFooter.onblur = function() {
  myColorFunc(mailReg, userEmailFooter);
};

userPassword.onblur = function() {
  myColorFunc(passReg, userPassword);
};

messageSubject.onblur = function() {
  myColorFunc(subjReg, messageSubject);
};

theMessage.onblur = function() {
  myColorFunc(textAreaReg, theMessage);
};

