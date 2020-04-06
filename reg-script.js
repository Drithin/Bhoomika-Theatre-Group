var username = document.forms['rform']['username'];
var email = document.forms['rform']['email'];
var mobile = document.forms['rform']['mobile'];
var age = document.forms['rform']['age'];
var gender = document.forms['rform']['gender'];
var nativePlace = document.forms['rform']['nativePlace'];
var presentAddressWithPin = document.forms['rform']['presentAddressWithPin'];
var educationalQualification = document.forms['rform']['educationalQualification'];
var motherTongue = document.forms['rform']['motherTongue'];
// var otherLanguagesKnown = document.forms['rform']['otherLanguagesKnown'];
// var presentOccupation = document.forms['rform']['presentOccupation'];

console.log(gender[0].checked);

var username_error = document.getElementById('username_error');
var email_error = document.getElementById('email_error');
var mobile_error = document.getElementById('mobile_error');
var age_error = document.getElementById('age_error');
// var gender_error = document.getElementById('gender_error');
var nativePlace_error = document.getElementById('nativePlace_error');
var presentAddressWithPin_error = document.getElementById('presentAddressWithPin_error');
var educationalQualification_error = document.getElementById('educationalQualification_error');
var motherTongue_error =  document.getElementById('motherTongue_error');
// var otherLanguagesKnown_error = document.getElementById('otherLanguagesKnown_error');
// var presentOccupation_error = document.getElementById('presentOccupation_error');


username.addEventListener('blur', usernameVerify, true);
email.addEventListener('blur', emailVerify, true);
mobile.addEventListener('blur', mobileVerify, true);
age.addEventListener('blur', ageVerify, true);
// console.log(gender[0].checked);
// gender.addEventListener('blur', genderVerify, true);
nativePlace.addEventListener('blur', nativeVerify, true);
presentAddressWithPin.addEventListener('blur', presentAddressWithPinVerify, true);
educationalQualification.addEventListener('blur', educationalQualifyVerify, true);
motherTongue.addEventListener('blur', motherTongueVerify, true);
// otherLanguagesKnown.addEventListener('blur', otherLanguagesKnownVerify, true);
// presentOccupation.addEventListener('blur',presentOccupationVerify, true );


function Validate(){

     
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
 


if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById('email').style.color = "red";
    email_error.textContent = "Email is required";
    email.focus();
   
    return false;

}


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
if(isNaN(age.value) || age.value < 16){
    mobile.style.border = "1px solid red";
    document.getElementById('mobile').style.color = "red";
    mobile_error.textContent = "Not a Valid Age";
    mobile.focus();
   
    return false;
}




    // validate gender
    if (gender[0].checked == false || gender[1].checked == false) {
        console.log(gender); 
        gender.style.border = "1px solid red";
        document.getElementById('gender').style.color = "red";
        gender_error.innerHTML = "Please Select a Gender";
    
        return false;
       }

    if (nativePlace.value == "") {
        nativePlace.style.border = "1px solid red";
        document.getElementById('nativePlace').style.color = "red";
        nativePlace_error.textContent = "Native Place is required";
        nativePlace.focus();
      
        return false;
      }
    
      if (nativePlace.value.length < 3) {
        nativePlace.style.border = "1px solid red";
        document.getElementById('nativePlace').style.color = "red";
        nativePlace_error.textContent = "Native Place must be at least 3 characters";
        nativePlace.focus();
        
        return false;
    }

    if (presentAddressWithPin.value == "") {
        presentAddressWithPin.style.border = "1px solid red";
        document.getElementById('presentAddressWithPin').style.color = "red";
        presentAddressWithPin_error.textContent = "Present Address is required";
        presentAddressWithPin.focus();
      
        return false;
      }
    
      if (presentAddressWithPin.value.length < 20) {
        presentAddressWithPin.style.border = "1px solid red";
        document.getElementById('presentAddressWithPin').style.color = "red";
        presentAddressWithPin_error.textContent = "Native Place must be at least 20 characters";
        presentAddressWithPin.focus();
        
        return false;
    }
    if (educationalQualification.value == "") {
        educationalQualification.style.border = "1px solid red";
        document.getElementById('educationalQualification').style.color = "red";
        educationalQualification_error.textContent = "Educational Qualification is required";
        educationalQualification.focus();
      
        return false;
      }
    
      if (motherTongue.value == "") {
        motherTongue.style.border = "1px solid red";
        document.getElementById('motherTongue').style.color = "red";
        motherTongue_error.textContent = "Mother Tongue is required";
        motherTongue.focus();
      
        return false;
      }
    
      if (motherTongue.value.length < 3) {
        motherTongue.style.border = "1px solid red";
        document.getElementById('motherTongue').style.color = "red";
        motherTongue_error.textContent = "Mother Tongue must be at least 3 characters";
        motherTongue.focus();
        
        return false;
    } 

    // if (otherLanguagesKnown.value == "") {
    //     otherLanguagesKnown.style.border = "1px solid red";
    //     document.getElementById('otherLanguagesKnown').style.color = "red";
    //     otherLanguagesKnown_error.textContent = "Other Languages Known is required";
    //     otherLanguagesKnown.focus();
      
    //     return false;
    //   }


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

function ageVerify(){
    if(age.value != ""){
        age.style.border = "1px solid #5e6e66";
        document.getElementById('age').style.color = "#5e6e66";
        age_error.innerHTML = "";
        return true;
}
}

// function genderVerify() {
//     if (gender[0] != false || gender[1] != false ) {
//      gender.style.border = "1px solid #5e6e66";
//      document.getElementById('gender').style.color = "#5e6e66";
//      gender_error.innerHTML = "";
//      return true;
//     }
//   }

function nativeVerify(){
    if (nativePlace.value != "") {
        nativePlace.style.border = "1px solid #5e6e66";
        document.getElementById('nativePlace').style.color = "#5e6e66";
        nativePlace_error.innerHTML = "";
        return true;
       }
}

function presentAddressWithPinVerify(){
    if (presentAddressWithPin.value != "") {
        presentAddressWithPin.style.border = "1px solid #5e6e66";
        document.getElementById('presentAddressWithPin').style.color = "#5e6e66";
        presentAddressWithPin_error.innerHTML = "";
        return true;
       }
}

function educationalQualifyVerify(){
    if (educationalQualification.value != "") {
        educationalQualification.style.border = "1px solid #5e6e66";
        document.getElementById('educationalQualification').style.color = "#5e6e66";
        educationalQualification_error.innerHTML = "";
        return true;
       }
}

// function motherTongueVerify(){
//     if (motherTongue.value != "") {
//         motherTongue.style.border = "1px solid #5e6e66";
//         document.getElementById('motherTongue').style.color = "#5e6e66";
//         motherTongue_error.innerHTML = "";
//         return true;
//        }
// }

function motherTongueVerify(){
    if (motherTongue.value != "") {
        motherTongue.style.border = "1px solid #5e6e66";
        document.getElementById('motherTongue').style.color = "#5e6e66";
        motherTongue_error.innerHTML = "";
        return true;
       }
}

// function otherLanguagesKnownVerify(){
//     if (otherLanguagesKnown.value != "") {
//         otherLanguagesKnown.style.border = "1px solid #5e6e66";
//         document.getElementById('otherLanguagesKnown').style.color = "#5e6e66";
//         otherLanguagesKnown_error.innerHTML = "";
//         return true;
//        }
// }

// function presentOccupationVerify(){
//     if (presentOccupation.value != "") {
//         presentOccupation.style.border = "1px solid #5e6e66";
//         document.getElementById('presentOccupation').style.color = "#5e6e66";
//         presentOccupation_error.innerHTML = "";
//         return true;
//        }
// }

