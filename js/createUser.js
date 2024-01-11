// Add event listener for create user form submission
document.getElementById("create-user-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve form data
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    // Perform user creation (this is a basic example, replace it with your actual user creation logic)
    alert(`User "${newUsername}" created successfully!`);
    // Redirect to the desired page
    window.location.href = "login.html";
});
