document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // You should implement server-side validation here and replace the following code
    if (username === 'yourusername' && password === 'pass1') {
        window.location.href = 'landing.html';
    } else {
        document.getElementById('loginError').innerText = 'Invalid username or password';
        document.getElementById('loginError').style.display = 'block';
    }
});

// function handleSignup(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Get the values from the form
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     // TODO: Add logic to store the username and password (e.g., in localStorage or send to a server)

//     alert("Signup successful! Now you can login.");
//     // You can redirect to the login page or perform other actions as needed
//     window.location.href = "index.html";
// }

// function handleLogin() {
//     const loginUsername = document.getElementById("username").value;
//     const loginPassword = document.getElementById("password").value;

//     const storedUsername = localStorage.getItem("username");
//     const storedPassword = localStorage.getItem("password");

//     if (loginUsername === storedUsername && loginPassword === storedPassword) {
//         window.location.href = "landing.html"; // Redirect to landing page
//     } else {
//         alert("Invalid credentials or you need to sign up first!");
//     }
// }