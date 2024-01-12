document.getElementById("create-admin-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const adminData = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        // Include other fields as needed
    };

    fetch('http://localhost:8080/admin/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminData),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Admin created successfully!');

            window.location.href = 'adminLogin.html';
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error creating admin. Please try again.');
        });
});

document.getElementById("goBackBtn").addEventListener("click", function () {
    window.location.href = 'adminLogin.html';
});
