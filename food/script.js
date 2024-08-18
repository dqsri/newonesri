// Function to toggle mobile navigation menu
function toggleNav() {
    const nav = document.getElementById('navbar');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (window.innerWidth <= 898) {
        // Show mobile nav
        mobileNav.style.display = 'block';
        nav.style.display = 'none';
    } else {
        // Show desktop nav
        mobileNav.style.display = 'none';
        nav.style.display = 'flex';
    }
}

// Event listener for window resize
window.addEventListener('resize', toggleNav);

// Initial check
toggleNav();
