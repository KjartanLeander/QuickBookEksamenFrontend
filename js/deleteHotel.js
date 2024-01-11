// Get the hotelId from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const hotelId = urlParams.get('id');

// Delete Hotel button
const deleteHotelBtn = document.getElementById("deleteHotelBtn");

// Add event listener for the Delete Hotel button
deleteHotelBtn.addEventListener("click", function () {
    // Confirm deletion
    const confirmation = confirm("Are you sure you want to delete this hotel?");

    if (confirmation) {
        // Perform the delete operation
        deleteHotel();
    } else {
        // User canceled the deletion
        // You can redirect or perform other actions as needed
    }
});

// Function to delete the hotel
function deleteHotel() {
    // Create the URL for deleting the hotel
    const urlDeleteHotel = `http://localhost:8080/hotels/${hotelId}`;

    // Send API request to delete the hotel
    fetch(urlDeleteHotel, {
        method: 'DELETE',
    })
        .then(response => {
            if (response.ok) {
                // Hotel deleted successfully
                alert("Hotel deleted successfully");
                // Redirect to hotels.html after successful deletion
                window.location.href = 'hotels.html';
            } else {
                // Hotel deletion failed
                alert("Failed to delete hotel");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle the error
        });
}
