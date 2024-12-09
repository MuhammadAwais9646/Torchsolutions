// JavaScript for loading header2.html dynamically
document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');

    // Fetch the header2.html content
    fetch('header2.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load header');
            }
            return response.text(); // Get HTML text
        })
        .then(data => {
            headerContainer.innerHTML = data; // Insert the header HTML into the container
            // Optionally call a function to initialize menu behavior
            initMenuBehavior();
        })
        .catch(error => console.error('Error loading header:', error));
});

// Function to initialize mobile menu behavior
function initMenuBehavior() {
    const sidebarToggleButton = document.querySelector('.header__area-menubar-right-box-sidebar-popup-icon');
    const sidebarPopup = document.querySelector('.header__area-menubar-right-sidebar-popup');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');
    const sidebarCloseButton = document.querySelector('.sidebar-close-btn');
    
    // Open sidebar when the hamburger icon is clicked
    sidebarToggleButton.addEventListener('click', () => {
        sidebarPopup.classList.add('open');
        sidebarOverlay.classList.add('active');
    });
    
    // Close sidebar when the close button or overlay is clicked
    sidebarCloseButton.addEventListener('click', () => {
        sidebarPopup.classList.remove('open');
        sidebarOverlay.classList.remove('active');
    });
    
    sidebarOverlay.addEventListener('click', () => {
        sidebarPopup.classList.remove('open');
        sidebarOverlay.classList.remove('active');
    });
}
