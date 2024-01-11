// loadNavbar.js
function loadNavbar() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("navbar-container").innerHTML = html;
        })
        .catch(error => {
            console.error("Error loading navbar:", error);
        });
}

window.addEventListener("DOMContentLoaded", loadNavbar);