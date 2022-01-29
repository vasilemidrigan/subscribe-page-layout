"use strict";
// Variables
const form = document.querySelector(".form");
const email = document.getElementById("email");
const submit = document.querySelector(".submit");
const errorMessage = document.querySelector(".email__error-message");
// Email Event Listener
email.addEventListener(
  "input",
  function () {
    if (email.validity.valid) {
      errorMessage.classList.add("hidden");
      email.classList.remove("email__error-border");
    } else {
      displayError();
    }
  },
  true
);
// Display Error Function
function displayError() {
  errorMessage.classList.remove("hidden");
  email.classList.add("email__error-border");
}
// Validation
form.addEventListener("submit", function (e) {
  console.log("catched");
  if (email.validity.valid === false) {
    displayError();
    e.preventDefault();
  }
});
