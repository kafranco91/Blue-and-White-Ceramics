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


// Function to handle the info display for each item
const handleInfoDisplay = (buttonId, infoId) => {
    const button = document.getElementById(buttonId);
    const info = document.getElementById(infoId); // Use ID for direct access

    // Function to show the overlay
    const showInfo = () => {
        // Close any other open info sections
        const allInfos = document.querySelectorAll('.info');
        allInfos.forEach((infoElem) => {
            if (infoElem !== info) {
                infoElem.classList.remove("active"); // Hide other info sections
            }
        });

        // Show the current info section
        info.classList.add("active");
        
        // Hide the info after 5 seconds
        setTimeout(() => {
            info.classList.remove("active");
        }, 5000); // 5000ms = 5 seconds
    
    };

    // Function to hide the overlay
    const hideInfo = (event) => {
        if (!info.contains(event.target) && event.target !== button) {
            info.classList.remove("active");
        }
    };

    // Click event for the button
    button.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent hiding immediately if button is clicked
        showInfo();
    });

    // Click event to hide info when clicked outside
    document.addEventListener("click", hideInfo);
};

// Initialize info display for each item
document.addEventListener("DOMContentLoaded", () => {
    handleInfoDisplay("body", "body-info");  // For Baluster
    handleInfoDisplay("body-incense-burner", "body-info-incense-burner");  // For Incense Burner
    handleInfoDisplay("body-bottle-vase", "body-info-bottle-vase");  // For Bottle Vase
});