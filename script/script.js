// Get the hamburger menu and the navigation container
const hamburger = document.querySelector('.hamburger');
const navContainer = document.querySelector('.nav-container');

// Toggle the "active" class on the nav container
hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click event from propagating to the document
    navContainer.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Close the nav container when clicking outside
document.addEventListener('click', (e) => {
    // Check if the click is outside the nav container and hamburger
    if (!navContainer.contains(e.target) && !hamburger.contains(e.target)) {
        navContainer.classList.remove('active');
        hamburger.classList.remove('open'); // Close hamburger animation
    }
});