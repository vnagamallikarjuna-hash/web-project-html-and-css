
document.addEventListener("DOMContentLoaded", function () {

  // Select all forms
  const forms = document.querySelectorAll("form");

  // Login form
  forms[0].addEventListener("submit", function (event) {
    event.preventDefault();

    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const password = this.querySelector('input[type="password"]').value;

    if (name === "" || email === "" || password === "") {
      alert("Please fill in all Login fields.");
      return;
    }

    if (password.length < 6) {
      alert("Password must contain at least 6 characters.");
      return;
    }

    alert("Login form submitted successfully!");

    this.reset();
  });

  // Signup form
  forms[1].addEventListener("submit", function (event) {
    event.preventDefault();

    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const password = this.querySelector('input[type="password"]').value;

    if (name === "" || email === "" || password === "") {
      alert("Please fill in all Signup fields.");
      return;
    }

    if (password.length < 6) {
      alert("Password must contain at least 6 characters.");
      return;
    }

    alert("Signup form submitted successfully!");

    this.reset();
  });

});
