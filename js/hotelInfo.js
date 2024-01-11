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
            </div>
        </div>
    `;
}

// Execute the fetchHotelDetails function when the page loads
fetchHotelDetails();
