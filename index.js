// Get the announcement text element
const announcementText = document.getElementById('announcement-text');

// Set the initial position (starting just below the visible area)
let position = 100;

// Function to move the text upward
function scrollText() {
    position--; // Move the position upward
    announcementText.style.top = position + '%'; // Update the top position
}
    
