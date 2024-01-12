document.getElementById("create-guest-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const guestData = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phoneNumber").value,
    };

    fetch('http://localhost:8080/guests/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(guestData),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Guest created successfully!');

            window.location.href = 'login.html';
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error creating guest. Please try again.');
        });
});

document.getElementById("goBackBtn").addEventListener("click", function () {
    window.location.href = 'hotels.html';
});
