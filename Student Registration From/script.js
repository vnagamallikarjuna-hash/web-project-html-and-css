document.getElementById("registrationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("number").value;

    let gender = document.querySelector(
        'input[name="gender"]:checked'
    ).value;

    let course = document.getElementById("course").value;

    alert(
        "Registration Successful!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Mobile: " + mobile + "\n" +
        "Gender: " + gender + "\n" +
        "Course: " + course
    );

});