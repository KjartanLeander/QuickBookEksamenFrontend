const urlParams = new URLSearchParams(window.location.search);
const hotelId = urlParams.get('id');

const deleteHotelBtn = document.getElementById("deleteHotelBtn");


const goBackBtn = document.getElementById("goBackBtn");

deleteHotelBtn.addEventListener("click", function () {
    const confirmation = confirm("Are you sure you want to delete this hotel?");

    if (confirmation) {
        deleteHotel();
    } else {
    }
});

goBackBtn.addEventListener("click", function () {
    window.location.href = `hotelInfo.html?id=${hotelId}`;
});

function deleteHotel() {
    const urlDeleteHotel = `http://localhost:8080/hotels/${hotelId}`;

    fetch(urlDeleteHotel, {
        method: 'DELETE',
    })
        .then(response => {
            if (response.ok) {
                alert("Hotel deleted successfully");
                window.location.href = 'hotels.html';
            } else {
                alert("Failed to delete hotel");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
