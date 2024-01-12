document.getElementById("createReservationBtn").addEventListener("click", async () => {
    const guestId = document.getElementById("guestId").value;
    const roomId = document.getElementById("roomId").value;

    try {
        const response = await fetch('http://localhost:8080/reservations/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ guestId, roomId }),
        });

        if (response.ok) {
            alert('Reservation created successfully');
            // Redirect to hotels.html
            window.location.href = 'guestHotels.html';
        } else {
            alert('Error creating reservation');
        }
    } catch (error) {
        console.error('Error creating reservation:', error);
    }
});
