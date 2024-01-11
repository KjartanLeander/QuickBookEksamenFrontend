// Import any required modules or functions

// Fetch hotel details and populate the form
function fetchHotelDetails() {
    // Retrieve hotel ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const hotelId = urlParams.get('id');
    const urlHotelInfo = `http://localhost:8080/hotels/${hotelId}`;

    fetch(urlHotelInfo)
        .then(response => response.json())
        .then(hotelData => {
            // Populate form with hotel details
            document.getElementById("hotelName").value = hotelData.name;
            document.getElementById("street").value = hotelData.street;
            document.getElementById("city").value = hotelData.city;
            document.getElementById("zip").value = hotelData.zip;
            document.getElementById("country").value = hotelData.country;
        })
        .catch(error => {
            console.error("Error fetching hotel details:", error);
            // Handle the error
        });

    // Set the href attribute of the "Go Back" button dynamically
    document.getElementById("goBackBtn").href = `hotelInfo.html?id=${hotelId}`;
}

// Handle form submission to update the hotel
document.getElementById("edit-hotel-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve form data
    const updatedHotelData = {
        name: document.getElementById("hotelName").value,
        street: document.getElementById("street").value,
        city: document.getElementById("city").value,
        zip: document.getElementById("zip").value,
        country: document.getElementById("country").value
    };

    // Retrieve hotel ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const hotelId = urlParams.get('id');
    const urlUpdateHotel = `http://localhost:8080/hotels/${hotelId}`;

    // Send API request to update the hotel
    fetch(urlUpdateHotel, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedHotelData),
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response accordingly
            console.log('Success:', data);

            // Redirect to hotels.html after successful update
            window.location.href = 'hotels.html';
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle the error
        });
});

// Fetch and populate the form with hotel details on page load
fetchHotelDetails();
