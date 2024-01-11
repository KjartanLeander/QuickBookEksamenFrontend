// Assuming you have retrieved hotelId from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const hotelId = urlParams.get('hotelId');

document.getElementById("create-room-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const roomData = {
        roomNumber: document.getElementById("roomNumber").value,
        numberOfBeds: document.getElementById("numberOfBeds").value,
        price: document.getElementById("price").value,
        available: document.getElementById("available").checked,
        hotelId: document.getElementById("hotelId").value,
    };

    fetch('http://localhost:8080/rooms/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(roomData),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);

            // Redirect to hotels.html after successful creation
            window.location.href = 'hotels.html';
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle the error
        });
});

// Assuming you have a "Go Back" button
document.getElementById("goBackBtn").href = `hotelInfo.html?id=${hotelId}`;
