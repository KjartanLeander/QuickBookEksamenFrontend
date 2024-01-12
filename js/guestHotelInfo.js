import { fetchAnyUrl } from "/js/modulejson.js";

const urlParams = new URLSearchParams(window.location.search);
const hotelId = urlParams.get('id');

const urlHotelInfo = `http://localhost:8080/hotels/${hotelId}`;
const hotelInfoContainer = document.getElementById("hotel-info-container");

async function fetchHotelDetails() {
    try {
        const hotelData = await fetchAnyUrl(urlHotelInfo);
        const hotelInfoHtml = createHotelInfoHtml(hotelData);
        hotelInfoContainer.innerHTML = hotelInfoHtml;

    } catch (error) {
        console.error("Error fetching hotel details:", error);
    }
}

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

fetchHotelDetails();
