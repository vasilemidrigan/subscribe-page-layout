"use strict";
// Variables
const form = document.querySelector(".form");
console.log("form:", form);
const email = document.getElementById("email");
const submit = document.querySelector(".submit");
const errorMessage = document.querySelector(".email__error-message");
// Email Event Listener
email.addEventListener(
  "input",
  function () {
    if (email.validity.valid) {
      errorMessage.classList.add("hidden");
    } else {
      displayError();
    }
  },
  true
);
// Display Error Function
function displayError() {
  errorMessage.classList.remove("hidden");
}
// Our own validation
form.addEventListener("submit", function (e) {
  console.log("catched");
  if (email.validity.valid === false) {
    displayError();
    e.preventDefault();
  }
});
