var userResponse = "N/A";

function askPass() {
    "use strict";
    userResponse = prompt("What's the password?", "000000");
    if (userResponse === "SpeculAcessPls") {
        window.open("www.link.com");
    }
}
