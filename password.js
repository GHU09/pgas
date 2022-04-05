var password = "W8w00rd";

(function promptPass() {

  var psw = prompt("Enter your Password");

  while (psw !== password) {
    alert("Incorrect Password");
    return promptPass();
  }

}());


alert('WELCOME');
