// login.js

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const loginData = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    };

    fetch('http://localhost:8080/guests/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Invalid username or password');
            }
            return response.text();
        })
        .then(data => {
            console.log('Success:', data);
            alert('Login successful!');

            // Redirect to the main hotels page
            window.location.href = 'guestHotels.html';
        })
        .catch(error => {
            console.error('Error:', error.message);
            alert('Invalid username or password. Please try again.');
        });
});
