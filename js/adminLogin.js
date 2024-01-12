document.getElementById("admin-login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const adminCredentials = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    };

    fetch('http://localhost:8080/admin/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminCredentials),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            console.log('Success:', data);
            alert('Admin logged in successfully!');

            window.location.href = 'hotels.html';
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Invalid credentials. Please try again.');
        });
});
