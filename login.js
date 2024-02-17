function toggleLoginForm() {
    var x = document.getElementById("loginForm");
    var y = document.getElementById("initial-butttons");
    x.style.display = "block";
    y.style.display = "none";
}

document.getElementById("emailInput").addEventListener("input", function() {
    updateLoginButtonColor();
    validateEmail();
});

document.getElementById("passwordInput").addEventListener("input", updateLoginButtonColor);

function updateLoginButtonColor() {
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;

    var dummyEmail = "globalgiver@gmail.com";
    var dummyPassword = "Globalgiver123";

    if (email === dummyEmail && password === dummyPassword) {
        document.getElementById("loginButton").style.backgroundColor = "green";
    } else {
        document.getElementById("loginButton").style.backgroundColor = "#36454F";
    }
}

function validateEmail() {
    var email = document.getElementById("emailInput").value;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var isValid = emailRegex.test(email);

    if (!isValid) {
        document.getElementById("emailInput").setCustomValidity("Please enter a valid email address");
    } else {
        document.getElementById("emailInput").setCustomValidity("");
    }
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;
    var dummyEmail = "globalgiver@gmail.com";
    var dummyPassword = "Globalgiver123";

    if (email === dummyEmail && password === dummyPassword) {
        window.location.href = "https://google.com/";
    }
});
