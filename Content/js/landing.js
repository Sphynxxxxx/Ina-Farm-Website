window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector(".preloader").style.opacity = "0"; // Fade out preloader
        setTimeout(function () {
            document.querySelector(".preloader").style.display = "none"; // Remove it
            document.querySelector(".main-content").style.display = "block"; // Show main content
        }, 1000); // Wait for fade-out transition
    }, 3000); // 3 seconds delay
});

// Add this script to your existing JavaScript

// Variables to track scroll position
let lastScrollTop = 0;
const header = document.getElementById('header');
const scrollThreshold = 10; // Minimum amount of pixels to scroll before showing/hiding

// Show/hide header based on scroll direction
window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Skip if the scroll difference is minimal
    if (Math.abs(lastScrollTop - currentScroll) <= scrollThreshold) {
        return;
    }
    
    // Scrolling down - hide header
    if (currentScroll > lastScrollTop && currentScroll > header.offsetHeight) {
        header.classList.add('hidden');
        header.classList.remove('visible');
    } 
    // Scrolling up - show header
    else {
        header.classList.remove('hidden');
        header.classList.add('visible');
    }
    
    lastScrollTop = currentScroll;
});

// Initialize header as visible
header.classList.add('visible');

// Also update header appearance on scroll (your existing code)
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

