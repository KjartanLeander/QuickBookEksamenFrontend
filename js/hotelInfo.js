// Import the fetchAnyUrl function from the modulejson.js file
import { fetchAnyUrl } from "/js/modulejson.js";

// Get the hotelId from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const hotelId = urlParams.get('id');

// Create the URL for fetching hotel information
const urlHotelInfo = `http://localhost:8080/hotels/${hotelId}`;

// Get the hotel-info-container element from the HTML
const hotelInfoContainer = document.getElementById("hotel-info-container");

// Fetch hotel details
async function fetchHotelDetails() {
    try {
        // Fetch data from the specified URL
        const hotelData = await fetchAnyUrl(urlHotelInfo);
        // Create HTML for hotel details
        const hotelInfoHtml = createHotelInfoHtml(hotelData);
        // Display the HTML in the hotel-info-container
        hotelInfoContainer.innerHTML = hotelInfoHtml;

        // Set up the event listener for the buttons after the content is loaded
        document.getElementById("editHotelBtn").addEventListener("click", editHotel);
        document.getElementById("deleteHotelBtn").addEventListener("click", deleteHotel);
    } catch (error) {
        console.error("Error fetching hotel details:", error);
    }
}

// Create HTML for hotel details
function createHotelInfoHtml(hotelData) {
    return `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Hotel name: ${hotelData.name}</h5>
                <p class="card-text">Street: ${hotelData.street}</p>
                <p class="card-text">City: ${hotelData.city}</p>
                <p class="card-text">Zip: ${hotelData.zip}</p>
                <p class="card-text">Country: ${hotelData.country}</p>
                <p class="card-text">Rooms: ${hotelData.rooms.length}</p>
                <button type="button" class="btn btn-primary" id="editHotelBtn">Edit Hotel</button>
                <button type="button" class="btn btn-danger" id="deleteHotelBtn">Delete Hotel</button>
            </div>
        </div>
    `;
}

// Function to navigate to the editHotel.html page with the current hotel ID
function editHotel() {
    window.location.href = `editHotel.html?id=${hotelId}`;
}

// Function to handle the delete functionality
function deleteHotel() {
    window.location.href = `deleteHotel.html?id=${hotelId}`;
}

// Execute the fetchHotelDetails function when the page loads
fetchHotelDetails();
