function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}
var submit = document.getElementById("loginButton");
console.log(submit);
submit.onclick = function () {
  validateform();
};
function validateform() {
  var form = document.getElementById("myform");
  var name = form.Name.value;
  var email = form.Email.value;
  var ph =form.phone.value;
  var phoneno = /^\d{10}$/;
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  console.log("asdfvghn");
  var usernameErr = true;
  var emailErr = true;
  var perr=true;

  if (name == "") {
    printError("error", "Please enter valid username");
  }else{
   if (name.length < 5) {
    printError("error", "Please enter valid username");
  }
  else {
    printError("error", "");
    usernameErr = false;
  }
  console.log(name);
  }
  
  console.log(email);

if (email == "") {
  printError("eerror", "Please enter valid email");
} else {
  if (!email.match(validRegex)) {
    printError("eerror", "Please enter valid email");
  } else {
    printError("eerror", "");
    emailErr = false;
  }
}
if (ph == "") {
  printError("perror", "Please enter valid phone no");
} else {
  if (ph.length <10) {
    printError("perror", "Please enter valid phone no");
  }
  else if (!ph.match(phoneno)) {
    printError("perror", "Please enter valid phone no");
  } else {
    printError("perror", "");
    perr = false;
  }
}
console.log(usernameErr,emailErr,perr);
if ((usernameErr||emailErr||perr) == true) {
  return false;
} else {
  // Creating a string from input data for preview
  var dataPreview =
    "You've entered the following details: \n" +
    "Username: " +
    name +
    "\n" +
    "email id: " +
    email+"\n"+"Phone : "+ph;

    // Display input data in a dialog box before submitting the form
    alert(dataPreview);
}
  }