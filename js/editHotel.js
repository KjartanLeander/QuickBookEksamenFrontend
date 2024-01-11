function fetchHotelDetails() {

    const urlParams = new URLSearchParams(window.location.search);
    const hotelId = urlParams.get('id');
    const urlHotelInfo = `http://localhost:8080/hotels/${hotelId}`;

    fetch(urlHotelInfo)
        .then(response => response.json())
        .then(hotelData => {

            document.getElementById("hotelName").value = hotelData.name;
            document.getElementById("street").value = hotelData.street;
            document.getElementById("city").value = hotelData.city;
            document.getElementById("zip").value = hotelData.zip;
            document.getElementById("country").value = hotelData.country;
        })
        .catch(error => {
            console.error("Error fetching hotel details:", error);

        });

    document.getElementById("goBackBtn").href = `hotelInfo.html?id=${hotelId}`;
}

document.getElementById("edit-hotel-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const updatedHotelData = {
        name: document.getElementById("hotelName").value,
        street: document.getElementById("street").value,
        city: document.getElementById("city").value,
        zip: document.getElementById("zip").value,
        country: document.getElementById("country").value
    };

    const urlParams = new URLSearchParams(window.location.search);
    const hotelId = urlParams.get('id');
    const urlUpdateHotel = `http://localhost:8080/hotels/${hotelId}`;

    fetch(urlUpdateHotel, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedHotelData),
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

fetchHotelDetails();
