import { fetchAnyUrl } from "/js/modulejson.js";

const urlHotels = "http://localhost:8080/hotels";
const hotelsContainer = document.getElementById("hotels-container");

function createHotelCard(hotel) {
    const hotelTemplate = document.createElement("div");
    hotelTemplate.classList.add("col-6", "col-sm-6", "col-md-4", "col-lg-3", "mb-4");
    hotelTemplate.innerHTML = `
        <div class="card">
            <div class="hotel">
                <div class="hotel-name p-2">
                    <div class="col-12">
                        <h5 class="card-title text-center">${hotel.name}</h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <a href="hotelInfo.html?id=${hotel.hotelId}">
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary">See more info</button>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    return hotelTemplate;
}

async function fetchHotels() {
    try {
        const hotels = await fetchAnyUrl(urlHotels);

        hotels.forEach(hotel => {
            const hotelCard = createHotelCard(hotel);
            hotelsContainer.appendChild(hotelCard);
        });
    } catch (error) {
        console.error("Error fetching hotels:", error);
    }
}

fetchHotels();
