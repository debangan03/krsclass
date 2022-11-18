function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

var submit = document.getElementById("loginButton");
console.log(submit);
submit.onclick = function () {
  validateform();
};
var usernamelist = ["debangan", "pritam", "bibhu"];
function validateform() {
  console.log("hsds");
  var form = document.getElementById("myform");
  var username = form.username.value;
  var password = form.password.value;

  var usernameErr = true;
  var passwordErr = true;

  if (username == "") {
    printError("error", "Please enter valid username");
  } else {
    if (username.length < 5) {
      printError("error", "Please enter valid username");
    } else if (!usernamelist.includes(username)) {
      printError("error", "username is not registered");
    } else {
      printError("error", "");
      usernameErr = false;
    }
  }

  if (password == "") {
    printError("perror", "Please enter valid password");
  } else {
    if (password.length < 5) {
      printError("perror", "Please enter valid password");
    } else {
      printError("perror", "");
      passwordErr = false;
    }
  }
  console.log(usernameErr, passwordErr);
  if ((usernameErr || passwordErr) == true) {
    return false;
  } else {
    // Creating a string from input data for preview
    var dataPreview =
      "You've entered the following details: \n" +
      "Username: " +
      username +
      "\n" +
      "Password: " +
      password;

    // Display input data in a dialog box before submitting the form
    alert(dataPreview);
  }
}
var clear=document.getElementById("clear");
clear.onclick=function(){
    clear_it();
}
clear_it()
{
  username="";
  password="";
  var Preview =
      
      "all fields are cleared " 
     

    // Display input data in a dialog box before submitting the form
    alert(Preview);


}