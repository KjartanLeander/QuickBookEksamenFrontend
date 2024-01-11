

document.getElementById("create-hotel-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const hotelData = {
        name: document.getElementById("hotelName").value,
        street: document.getElementById("street").value,
        city: document.getElementById("city").value,
        zip: document.getElementById("zip").value,
        country: document.getElementById("country").value
    };

    fetch('http://localhost:8080/hotels/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(hotelData),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);

            window.location.href = 'hotels.html';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});