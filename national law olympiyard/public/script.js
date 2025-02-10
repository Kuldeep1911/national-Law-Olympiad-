// Function to open popup box
function openPopup(popupId) {
    document.getElementById(popupId).style.display = "flex";
}

// Function to close popup box
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("videoModal");
    var closeBtn = document.querySelector(".close");

    // Show modal when page loads
    modal.style.display = "flex";

    // Close modal when clicking the close button
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
