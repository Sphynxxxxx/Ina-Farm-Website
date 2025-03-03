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