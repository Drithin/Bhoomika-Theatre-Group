var username = document.forms['sform']['username'];
var email = document.forms['sform']['email'];
var mobile = document.forms['sform']['mobile'];
var message = document.forms['sform']['message'];

var username_error = document.getElementById('username_error');
var email_error = document.getElementById('email_error');
var mobile_error = document.getElementById('mobile_error');
var message_error = document.getElementById('message_error');


username.addEventListener('blur', usernameVerify, true);
email.addEventListener('blur', emailVerify, true);
mobile.addEventListener('blur', mobileVerify, true);
message.addEventListener('blur', messageVerify, true);


function Validate(){

    // validate username
  if (username.value == "") {
    username.style.border = "1px solid red";
    document.getElementById('username').style.color = "red";
    username_error.textContent = "User Name is required";
    username.focus();
    return false;
  }

  if (username.value.length < 3) {
    username.style.border = "1px solid red";
    document.getElementById('username').style.color = "red";
    username_error.textContent = "User Name must be at least 3 characters";
    username.focus();
    return false;
}
 

// validate email
if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById('email').style.color = "red";
    email_error.textContent = "Email is required";
    email.focus();
    return false;

}

//validate number
if(mobile.value == ""){
    mobile.style.border = "1px solid red";
    document.getElementById('mobile').style.color = "red";
    mobile_error.textContent = "Number is required";
    mobile.focus();
    return false;
}

if(isNaN(mobile.value) || mobile.length < 10){
    mobile.style.border = "1px solid red";
    document.getElementById('mobile').style.color = "red";
    mobile_error.textContent = "Enter a Valid Number";
    mobile.focus();
    return false;
}

//validate message

if(message.value == ""){
    message.style.border = "1px solid red";
    document.getElementById('message').style.color = "red";
    message_error.textContent = "Message can't be Empty";
    message.focus();
    return false;
}

alert("Form Submitted Successfully!");
  return true;

}

// event handler functions
function usernameVerify() {
    if (username.value != "") {
     username.style.border = "1px solid #5e6e66";
     document.getElementById('username').style.color = "#5e6e66";
     username_error.innerHTML = "";
     return true;
    }
  }

function emailVerify() {
    if (email.value != "") {
        email.style.border = "1px solid #5e6e66";
        document.getElementById('email').style.color = "#5e6e66";
        email_error.innerHTML = "";
        return true;
    }
  }

function mobileVerify(){
    if(mobile.value != ""){
        mobile.style.border = "1px solid #5e6e66";
        document.getElementById('mobile').style.color = "#5e6e66";
        mobile_error.innerHTML = "";
        return true;
    }
}

function messageVerify(){
    if(message.value != ""){
        message.style.border = "1px solid #5e6e66";
        document.getElementById('message').style.color = "#5e6e66";
        message_error.textContent = "";
        return true;
    }
}