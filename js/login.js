// Add event listener for login form submission
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve form data
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform authentication (this is a basic example, replace it with your actual authentication logic)
    if (username === "your_username" && password === "your_password") {
        alert("Login successful!");
        // Redirect to the desired page
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
