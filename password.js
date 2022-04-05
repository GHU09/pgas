var userResponse = "N/A";

function askPass() {
    "use strict";
    userResponse = prompt("What's the password?", "testv1");
    if (userResponse === "SpeculAcessPls") {
        window.open("https://ghu09.github.io/pgas/");
    }
}
