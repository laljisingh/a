const form = document.getElementById("signup");
const name = form.elements["name"];
const email = form.elements["email"];

// getting the element's value
let fullName = name.value;
let emailAddress = email.value;
alert(fullName);
